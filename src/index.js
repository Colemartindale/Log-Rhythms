
document.addEventListener("DOMContentLoaded", function () {

    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const audioCtx = new AudioContext();
    console.log(audioCtx);
    let audio1 = new Audio();
    let audio2 = new Audio();
    let audio3 = new Audio();
     
    audio1.src = '../assets/sounds/Fox/HIYAAA.wav';
    audio2.src = '../assets/sounds/ROY/up-b.wav';
    audio3.src = '../assets/sounds/okay.wav';
    button1.addEventListener('click', function(){
        audio1.play()
    })
    button2.addEventListener('click', function(){
        audio2.play()
    })
    button3.addEventListener('click', function(){
        audio3.play()
    })
   

    const slider = document.getElementById('slider');
    const currentTempo = document.querySelector('.tempo span');

    slider.oninput = (() => {
        let val = slider.value;
        if (val < 100) {
            currentTempo.innerHTML = "0" + val + " BPM"
        } else {
            currentTempo.innerHTML = val + " BPM"
        }
    });


  
})