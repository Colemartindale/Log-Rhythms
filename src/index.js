import * as sequencer from "./scripts/sequencer";

document.addEventListener("DOMContentLoaded", function () {


    
   

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