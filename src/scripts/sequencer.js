import * as Tone from 'tone'

document.addEventListener("DOMContentLoaded", function () {
    const vol = new Tone.Volume(-15).toDestination();

    // Audio visualizer: connect an analyser to the output
    const analyser = new Tone.Analyser('waveform', 256);
    vol.connect(analyser);

    const canvas = document.querySelector('.audio-visualizer canvas');
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function drawVisualizer() {
        requestAnimationFrame(drawVisualizer);
        const values = analyser.getValue();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        const sliceWidth = canvas.width / values.length;
        let x = 0;
        for (let i = 0; i < values.length; i++) {
            const y = (values[i] + 1) / 2 * canvas.height;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
            x += sliceWidth;
        }
        ctx.strokeStyle = '#fbaf08';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    drawVisualizer();

    const volSlider = document.getElementById("vol-slider");
    vol.volume.rampTo(volSlider.value, 0.1);
    volSlider.addEventListener('input', () => {
        vol.volume.rampTo(volSlider.value, 0.1);
    });

    const volIcon = document.getElementById('vol-icon');
    volIcon.addEventListener('click', () => {
        if (vol.volume.value > -90) {
            vol.volume.rampTo(-100, 0.1);
            volIcon.src = "assets/icons/mute-icon.png"
        } else {
            vol.volume.rampTo(volSlider.value, 0.1);
            volIcon.src = "assets/icons/volume-icon.png"
        }
    });

    function makeKit(paths) {
        return paths.map(p => new Tone.Player(p).connect(vol));
    }

    const trapKit = makeKit([
        'assets/sounds/dance-kit/kick-dance.wav',
        'assets/sounds/dance-kit/snare-dance.wav',
        'assets/sounds/dance-kit/hat-dance.wav',
        'assets/sounds/dance-kit/tom-dance.wav',
        'assets/sounds/dance-kit/clap-dance.wav',
        'assets/sounds/dance-kit/crash-dance.wav'
    ]);

    const the80skit = makeKit([
        'assets/sounds/rock-kit/kick-rock.wav',
        'assets/sounds/rock-kit/snare-rock.wav',
        'assets/sounds/rock-kit/hat-rock.wav',
        'assets/sounds/rock-kit/tom-rock.wav',
        'assets/sounds/rock-kit/clap-rock.wav',
        'assets/sounds/rock-kit/crash-rock.wav'
    ]);

    const foxKit = makeKit([
        'assets/sounds/smash-kit/kick-fox.wav',
        'assets/sounds/smash-kit/snare-fox.wav',
        'assets/sounds/smash-kit/hat-fox.wav',
        'assets/sounds/smash-kit/tom-fox.wav',
        'assets/sounds/smash-kit/clap-fox.wav',
        'assets/sounds/smash-kit/crash-fox.wav'
    ]);

    const kits = { 1: trapKit, 2: the80skit, 3: foxKit };
    let currentKit = 1;
    const dropDown = document.querySelector(".dropdown-menu");
    const currentKitText = document.getElementById("current-kit");
    dropDown.addEventListener('click', (e) => {
        if (e.target.id === "rock-kit") {
            currentKit = 2;
            currentKitText.textContent = "80s Kit";
        } else if (e.target.id === "dance-kit") {
            currentKit = 1;
            currentKitText.textContent = "Trap Kit";
        } else if (e.target.id === "fox-kit") {
            currentKit = 3;
            currentKitText.textContent = "Star Fox Kit";
        }
    });

    // Cache all DOM references once
    const rows = document.querySelectorAll('.row');
    const allInputs = document.querySelectorAll('.row input');
    const rowInputs = [];
    rows.forEach((row) => {
        rowInputs.push(row.querySelectorAll("input"));
    });

    let index = 0;
    let prevStep = -1;
    function looper(time) {
        const step = index % 32;
        const kit = kits[currentKit];
        for (let i = 0; i < rowInputs.length; i++) {
            const input = rowInputs[i][step];
            // Schedule sounds at the exact audio clock time for tight timing
            if (input.checked) kit[i].start(time);
        }
        Tone.Draw.schedule(() => {
            if (prevStep >= 0) {
                for (let i = 0; i < rowInputs.length; i++) {
                    rowInputs[i][prevStep].classList.remove('current-pos');
                }
            }
            for (let i = 0; i < rowInputs.length; i++) {
                rowInputs[i][step].classList.add('current-pos');
            }
            prevStep = step;
        }, time);
        index++;
    }
    Tone.Transport.scheduleRepeat(looper, '8n');

    const resetBtn = document.querySelector('.reset');
    const playPauseBtn = document.querySelector('.play-pause');
    const restartBtn = document.querySelector('.restart');
    const slider = document.getElementById('slider');
    let samplesReady = false;

    slider.addEventListener('input', () => {
        Tone.Transport.bpm.rampTo(slider.value, 0.1);
    });

    resetBtn.addEventListener('click', () => {
        Tone.Transport.stop();
        index = 0;
        prevStep = -1;
        allInputs.forEach(input => {
            input.checked = false;
            input.classList.remove("current-pos");
        });
    });

    playPauseBtn.addEventListener('click', async () => {
        // Ensure audio context is running and all samples are loaded
        await Tone.start();
        if (!samplesReady) {
            await Tone.loaded();
            samplesReady = true;
        }
        if (Tone.Transport.state === "started") {
            Tone.Transport.pause();
        } else {
            Tone.Transport.start();
        }
    });

    restartBtn.addEventListener('click', () => {
        Tone.Transport.stop();
        index = 0;
        prevStep = -1;
        allInputs.forEach(input => input.classList.remove("current-pos"));
    });

    // Event delegation: one listener on the grid instead of 192 individual ones
    const drumNameToIndex = { 'kick': 0, 'snare': 1, 'hi-hat': 2, 'tom': 3, 'clap': 4, 'crash': 5 };
    const grid = document.querySelector('.sequence-grid');
    grid.addEventListener('click', (e) => {
        const input = e.target.closest('input[type="checkbox"]');
        if (!input) return;
        const drumIndex = drumNameToIndex[input.dataset.drum];
        if (drumIndex !== undefined) {
            kits[currentKit][drumIndex].start();
        }
    });

    // Instructions toggle via CSS class
    const instBtn = document.getElementById("instructions-btn");
    instBtn.addEventListener('click', () => {
        document.body.classList.toggle('show-instructions');
    });
})
