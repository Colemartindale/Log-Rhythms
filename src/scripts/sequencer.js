import * as Tone from 'tone'

document.addEventListener("DOMContentLoaded", function () {
    const kickDance = new Tone.Player('../assets/sounds/dance-kit/kick-dance.wav').toDestination();
    const snareDance = new Tone.Player('../assets/sounds/dance-kit/snare-dance.wav').toDestination();
    const hatDance = new Tone.Player('../assets/sounds/dance-kit/hat-dance.wav').toDestination();
    const tomDance = new Tone.Player('../assets/sounds/dance-kit/tom-dance.wav').toDestination();
    const clapDance = new Tone.Player('../assets/sounds/dance-kit/clap-dance.wav').toDestination();
    const crashDance = new Tone.Player('../assets/sounds/dance-kit/crash-dance.wav').toDestination();
    const danceKit = [
        kickDance, snareDance, hatDance,
        tomDance, clapDance, crashDance
    ];


    const kickRock = new Tone.Player('../assets/sounds/rock-kit/kick-rock.wav').toDestination();
    const snareRock = new Tone.Player('../assets/sounds/rock-kit/snare-rock.wav').toDestination();
    const hatRock = new Tone.Player('../assets/sounds/rock-kit/hat-rock.wav').toDestination();
    const tomRock = new Tone.Player('../assets/sounds/rock-kit/tom-rock.wav').toDestination();
    const clapRock = new Tone.Player('../assets/sounds/rock-kit/clap-rock.wav').toDestination();
    const crashRock = new Tone.Player('../assets/sounds/rock-kit/crash-rock.wav').toDestination();
    const rockKit = [
        kickRock, snareRock, hatRock,
        tomRock, clapRock, crashRock
    ];


    const kickFox = new Tone.Player('../assets/sounds/smash-kit/kick-fox.wav').toDestination();
    const snareFox = new Tone.Player('../assets/sounds/smash-kit/snare-fox.wav').toDestination();
    const hatFox = new Tone.Player('../assets/sounds/smash-kit/hat-fox.wav').toDestination();
    const tomFox = new Tone.Player('../assets/sounds/smash-kit/tom-fox.wav').toDestination();
    const clapFox = new Tone.Player('../assets/sounds/smash-kit/clap-fox.wav').toDestination();
    const crashFox = new Tone.Player('../assets/sounds/smash-kit/crash-fox.wav').toDestination();
    const smashKit = [
        kickFox, snareFox, hatFox,
        tomFox, clapFox, crashFox
    ];


    let currentKit;
    const danceBtn = document.getElementById("dance-kit");
    const rockBtn = document.getElementById("rock-kit");
    const foxBtn = document.getElementById("fox-kit");
    // console.log(rockBtn);
    foxBtn.addEventListener('click', ()=> {
        foxBtn.classList.add('fox')
    })
    
    rockBtn.addEventListener('click', ()=> {
        // currentKit = rockKit;
        console.log(currentKit, "sup");
    })
    
    danceBtn.addEventListener('click', ()=> {
        currentKit = danceKit;
        console.log(currentKit);
    })
    console.log(currentKit, "ugh");

    
    
    const gain = new Tone.Gain(0.1);
    gain.toDestination()
    smashKit.forEach(sound => sound.connect(gain));
    rockKit.forEach(sound => sound.connect(gain));
    danceKit.forEach(sound => sound.connect(gain));
    Tone.Transport.scheduleRepeat(looper, '8n');
    const rows = document.querySelectorAll('#row');
    // console.log($rows);
    let index = 0;
    function looper(time) {
        let inputs = document.querySelectorAll('#row input');
        inputs.forEach(input => input.classList.remove("current-pos"));
        let finalRows = []
        rows.forEach((row) => {
            let rowList = row.querySelectorAll("input")
            // console.log(rowList)
            finalRows.push(rowList);
        });
        let step = index % 32;
        console.log(step, 'STEPNERD')
        // console.log(Tone.Transport.state)
        for (let i = 0; i < finalRows.length; i++) {
            let sound = smashKit[i];
            // console.log(sound, "SOUND")
            let row = finalRows[i];
            // console.log(row)
            let input = row[step];
            // console.log(input)
            if (input.checked) sound.start();
            // console.log(index, 'idx')
            input.classList.toggle('current-pos');
        }
        index++;
    }
    // console.log(Tone.Transport.state)

    
    const resetBtn = document.querySelector('.reset');
    const playPauseBtn = document.querySelector('.play-pause');
    const restartBtn = document.querySelector('.restart');
    const checked = document.querySelectorAll('input');
    const slider = document.getElementById('slider');

    slider.addEventListener('change', ()=> {
        Tone.Transport.bpm.rampTo(slider.value, 0.1);
    });

    resetBtn.addEventListener('click', ()=> {
        index = 0;
        for (let i = 0; i < checked.length; i++) {
            if (checked[i].checked) checked[i].checked = false;        
        };
        let inputs = document.querySelectorAll('#row input');
        inputs.forEach(input => input.classList.remove("current-pos"));
    });

    playPauseBtn.addEventListener('click', ()=>{
        if (Tone.Transport.state === "stopped") {
            Tone.start();
            Tone.Transport.start();
        } else {
            Tone.Transport.stop();      
        }
    });

    restartBtn.addEventListener('click', ()=>{
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
            let sound = smashKit[i]
            for (let j = 0; j < 32; j++) {
                drum[j].addEventListener('click', () => {
                    sound.start();
                });
            };
        }
    };
    clicker();
    
})



