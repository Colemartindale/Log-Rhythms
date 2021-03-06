import * as Tone from 'tone'
import { Context } from 'tone';

document.addEventListener("DOMContentLoaded", function () {
    const gain = new Tone.Gain(0.1);
    gain.toDestination()
    const vol = new Tone.Volume(-15).toDestination();

    const volSlider = document.getElementById("vol-slider");
    Tone.getDestination().volume.rampTo(volSlider.value, 0.1);
    volSlider.addEventListener('change', () => {
        Tone.getDestination().volume.rampTo(volSlider.value, 0.1);
    });

    const volIcon = document.getElementById('vol-icon');
    const toneVolume = Tone.getDestination().volume
    toneVolume.value = -15
    volIcon.addEventListener('click', () => {
        if (toneVolume.value > -90) {
            toneVolume.rampTo(-100, 0.1);
            volIcon.src = "assets/icons/mute-icon.png"
        } else {
            toneVolume.rampTo(volSlider.value, 0.1);
            volIcon.src = "assets/icons/volume-icon.png"
        }
    });

    const kickTrap = new Tone.Player('assets/sounds/dance-kit/kick-dance.wav').toDestination();
    const snareDance = new Tone.Player('assets/sounds/dance-kit/snare-dance.wav').toDestination();
    const hatDance = new Tone.Player('assets/sounds/dance-kit/hat-dance.wav').toDestination();
    const tomDance = new Tone.Player('assets/sounds/dance-kit/tom-dance.wav').toDestination();
    const clapDance = new Tone.Player('assets/sounds/dance-kit/clap-dance.wav').toDestination();
    const crashDance = new Tone.Player('assets/sounds/dance-kit/crash-dance.wav').toDestination();
    const trapKit = [
        kickTrap, snareDance, hatDance,
        tomDance, clapDance, crashDance
    ];
    trapKit.forEach(sound => sound.connect(vol));

    const kick80s = new Tone.Player('assets/sounds/rock-kit/kick-rock.wav').toDestination();
    const snare80s = new Tone.Player('assets/sounds/rock-kit/snare-rock.wav').toDestination();
    const hat80s = new Tone.Player('assets/sounds/rock-kit/hat-rock.wav').toDestination();
    const tom80s = new Tone.Player('assets/sounds/rock-kit/tom-rock.wav').toDestination();
    const clap80s = new Tone.Player('assets/sounds/rock-kit/clap-rock.wav').toDestination();
    const crash80s = new Tone.Player('assets/sounds/rock-kit/crash-rock.wav').toDestination();
    const the80skit = [
        kick80s, snare80s, hat80s,
        tom80s, clap80s, crash80s
    ];
    the80skit.forEach(sound => sound.connect(vol));


    const kickFox = new Tone.Player('assets/sounds/smash-kit/kick-fox.wav').toDestination();
    const snareFox = new Tone.Player('assets/sounds/smash-kit/snare-fox.wav').toDestination();
    const hatFox = new Tone.Player('assets/sounds/smash-kit/hat-fox.wav').toDestination();
    const tomFox = new Tone.Player('assets/sounds/smash-kit/tom-fox.wav').toDestination();
    const clapFox = new Tone.Player('assets/sounds/smash-kit/clap-fox.wav').toDestination();
    const crashFox = new Tone.Player('assets/sounds/smash-kit/crash-fox.wav').toDestination();
    const foxKit = [
        kickFox, snareFox, hatFox,
        tomFox, clapFox, crashFox
    ];
    foxKit.forEach(sound => sound.connect(vol));

    
    let currentKit;
    const danceBtn = document.getElementById("dance-kit");
    const rockBtn = document.getElementById("rock-kit");
    const foxBtn = document.getElementById("fox-kit");
    const dropDown = document.querySelector(".dropdown-menu")
    
    const currentKitText = document.getElementById("current-kit");
    dropDown.addEventListener('click', (e) => {
        if (e.target.id === "rock-kit") {
            currentKit = 2;
            currentKitText.innerHTML="80s Kit"
        } else if (e.target.id === "dance-kit") {
            currentKit = 1;
            currentKitText.innerHTML="Trap Kit"
        } else {
            currentKit = 3;
            currentKitText.innerHTML="Star Fox Kit"
        }
    });
    
    

    Tone.Transport.scheduleRepeat(looper, '8n');
    const rows = document.querySelectorAll('#row');
    let index = 0;
    function looper(time) {
        let inputs = document.querySelectorAll('#row input');
        inputs.forEach(input => input.classList.remove("current-pos"));
        let finalRows = []
        rows.forEach((row) => {
            let rowList = row.querySelectorAll("input")
            finalRows.push(rowList);
        });
        let step = index % 32;
        for (let i = 0; i < finalRows.length; i++) {
            let sound;
            if (currentKit === 3) {
                sound = foxKit[i];
            } else if (currentKit === 2) {
                sound = the80skit[i];
            } else {
                sound = trapKit[i];
            }
            let row = finalRows[i];
            let input = row[step];
            if (input.checked) sound.start();
            input.classList.toggle('current-pos');
        }
        index++;
    }

    
    const resetBtn = document.querySelector('.reset');
    const playPauseBtn = document.querySelector('.play-pause');
    const restartBtn = document.querySelector('.restart');
    const checked = document.querySelectorAll('input');
    const slider = document.getElementById('slider');

    slider.addEventListener('change', () => {
        Tone.Transport.bpm.rampTo(slider.value, 0.1);
    });

    resetBtn.addEventListener('click', () => {
        index = 0;
        for (let i = 0; i < checked.length; i++) {
            if (checked[i].checked) checked[i].checked = false;        
        };
        let inputs = document.querySelectorAll('#row input');
        inputs.forEach(input => input.classList.remove("current-pos"));
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
        let inputs = document.querySelectorAll('#row input');
        inputs.forEach(input => input.classList.remove("current-pos"));
    });
    
    const kick = document.querySelectorAll('#kick');
    const snare = document.querySelectorAll('#snare');
    const hiHat = document.querySelectorAll('#hi-hat');
    const tom = document.querySelectorAll('#tom');
    const clap = document.querySelectorAll('#clap');
    const crash = document.querySelectorAll('#crash');
    const drumIDs = [
        kick, snare, hiHat,
        tom, clap, crash
    ];

    function clicker() {
        for (let i = 0; i < 6; i++) {
            let drum = drumIDs[i];
            let sound;
            for (let j = 0; j < 32; j++) {
                drum[j].addEventListener('click', () => {
                    if (currentKit === 3) {
                        sound = foxKit[i];
                    } else if (currentKit === 2) {
                        sound = the80skit[i];
                    } else {
                        sound = trapKit[i];
                    }
                    sound.start();
                });
            };
        };
    };
    clicker();


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



