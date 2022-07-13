import * as sequencer from "./scripts/sequencer";
import * as piano from "./scripts/piano";
import * as audioVisualizer from "./scripts/audio-visualizer";

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById('slider');
    const currentTempo = document.querySelector('.tempo span');

    slider.oninput = (() => {
        let val = slider.value;
        if (val < 100) {
            currentTempo.innerHTML =  val + " BPM"
        } else {
            currentTempo.innerHTML = val + " BPM"
        }
    });
      
})