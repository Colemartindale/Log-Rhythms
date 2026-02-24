import * as Tone from 'tone'

Tone.context.lookAhead = 0.05;

export const vol = new Tone.Volume(-15).toDestination();
export const analyser = new Tone.Analyser('waveform', 256);
vol.connect(analyser);
