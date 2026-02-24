import * as Tone from 'tone'

document.addEventListener("DOMContentLoaded", function () {
    const vol = new Tone.Volume(-15).toDestination();

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

    // Cache all DOM references once instead of querying every beat tick
    const rows = document.querySelectorAll('#row');
    const allInputs = document.querySelectorAll('#row input');
    const rowInputs = [];
    rows.forEach((row) => {
        rowInputs.push(row.querySelectorAll("input"));
    });

    let index = 0;
    function looper(time) {
        const step = index % 32;
        const kit = kits[currentKit];
        for (let i = 0; i < rowInputs.length; i++) {
            const input = rowInputs[i][step];
            if (input.checked) kit[i].start();
        }
        // Update visual position on the UI thread
        Tone.Draw.schedule(() => {
            allInputs.forEach(input => input.classList.remove("current-pos"));
            for (let i = 0; i < rowInputs.length; i++) {
                rowInputs[i][step].classList.add('current-pos');
            }
        }, time);
        index++;
    }
    Tone.Transport.scheduleRepeat(looper, '8n');

    
    const resetBtn = document.querySelector('.reset');
    const playPauseBtn = document.querySelector('.play-pause');
    const restartBtn = document.querySelector('.restart');
    const slider = document.getElementById('slider');

    slider.addEventListener('input', () => {
        Tone.Transport.bpm.rampTo(slider.value, 0.1);
    });

    resetBtn.addEventListener('click', () => {
        index = 0;
        allInputs.forEach(input => {
            input.checked = false;
            input.classList.remove("current-pos");
        });
    });

    playPauseBtn.addEventListener('click', () => {
        if (Tone.Transport.state === "stopped") {
            Tone.start();
            Tone.Transport.start();
        } else {
            Tone.Transport.stop();
        }
    });

    restartBtn.addEventListener('click', () => {
        Tone.Transport.stop();
        index = 0;
        allInputs.forEach(input => input.classList.remove("current-pos"));
    });

    // Event delegation: one listener on the grid instead of 192 individual ones
    const drumIdToIndex = { 'kick': 0, 'snare': 1, 'hi-hat': 2, 'tom': 3, 'clap': 4, 'crash': 5 };
    const grid = document.querySelector('.sequence-grid');
    grid.addEventListener('click', (e) => {
        const input = e.target.closest('input[type="checkbox"]');
        if (!input) return;
        const drumIndex = drumIdToIndex[input.id];
        if (drumIndex !== undefined) {
            kits[currentKit][drumIndex].start();
        }
    });


    const instBtn = document.getElementById("instructions-btn");
    const instructions = document.querySelectorAll(".inst");
    const keyboardInst = document.querySelectorAll(".keyboard-key");
    instBtn.onclick = () => {
        Array.from(instructions).forEach( instruction => {
            if (instruction.style.display === "none" || instruction.style.display === "") {
                instruction.style.display = "flex";
            } else {
                instruction.style.display = "none";
            }
        });
        Array.from(keyboardInst).forEach( keyInput => {
            if (keyInput.style.display === "none" || keyInput.style.display === "") {
                keyInput.style.display = "flex";
            } else {
                keyInput.style.display = "none";
            }
        });
    };
    
})



