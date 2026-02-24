import * as Tone from 'tone'
import { vol } from './audio-bus'

document.addEventListener("DOMContentLoaded", function () {
    const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j', '2', '3', '5', '6', '7', '9', '0'];

    const keys = document.querySelectorAll(".key");
    const whiteKeys = document.querySelectorAll(".key.white");
    const blackKeys = document.querySelectorAll(".key.black");

    // Porta Synth sampler — pre-decoded buffers for zero-latency playback
    const portaSampler = new Tone.Sampler({
        urls: {
            "C5": "porta-C5.mp3",
            "Db5": "porta-Db5.mp3",
            "D5": "porta-D5.mp3",
            "Eb5": "porta-Eb5.mp3",
            "E5": "porta-E5.mp3",
            "F5": "porta-F5.mp3",
            "Gb5": "porta-Gb5.mp3",
            "G5": "porta-G5.mp3",
            "Ab5": "porta-Ab5.mp3",
            "A5": "porta-A5.mp3",
            "Bb5": "porta-Bb5.mp3",
            "B5": "porta-B5.mp3",
            "C6": "porta-C6.mp3",
            "Db6": "porta-Db6.mp3",
            "D6": "porta-D6.mp3",
            "Eb6": "porta-Eb6.mp3",
            "E6": "porta-E6.mp3",
            "F6": "porta-F6.mp3",
            "Gb6": "porta-Gb6.mp3",
            "G6": "porta-G6.mp3",
            "Ab6": "porta-Ab6.mp3",
            "A6": "porta-A6.mp3",
            "Bb6": "porta-Bb6.mp3",
            "B6": "porta-B6.mp3",
            "C7": "porta-C7.mp3",
            "Db7": "porta-Db7.mp3",
            "D7": "porta-D7.mp3",
            "Eb7": "porta-Eb7.mp3",
            "E7": "porta-E7.mp3",
        },
        baseUrl: "assets/sounds/porta-synth/",
        release: 1,
    }).connect(vol);

    // FM Synth — bright, bell-like tones
    const fmSynth = new Tone.PolySynth(Tone.FMSynth, {
        volume: -8,
        modulationIndex: 3,
        envelope: { attack: 0.01, decay: 0.4, sustain: 0.15, release: 0.8 },
    }).connect(vol);

    // AM Synth — warm, tremolo-style tones
    const amSynth = new Tone.PolySynth(Tone.AMSynth, {
        volume: -8,
        envelope: { attack: 0.01, decay: 0.3, sustain: 0.2, release: 0.8 },
    }).connect(vol);

    const instruments = {
        'porta': portaSampler,
        'fm': fmSynth,
        'am': amSynth,
    };
    let currentInstrument = portaSampler;

    // Sound selector
    const soundSelector = document.getElementById('piano-sound');
    if (soundSelector) {
        soundSelector.addEventListener('change', (e) => {
            currentInstrument = instruments[e.target.value];
        });
    }

    keys.forEach(key => {
        key.addEventListener("click", () => playNote(key));
    });

    document.addEventListener('keydown', e => {
        if (e.repeat) return;
        const key = e.key;
        const whiteKeyIndex = WHITE_KEYS.indexOf(key);
        const blackKeyIndex = BLACK_KEYS.indexOf(key);
        if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
        if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
    });

    function playNote(key) {
        Tone.start();
        const note = key.dataset.note;
        currentInstrument.triggerAttackRelease(note, "8n");
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 250);
    }
});
