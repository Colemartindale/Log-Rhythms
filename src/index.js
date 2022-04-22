

document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    console.log(audioCtx);
    let audio1 = new Audio()
    let audio2 = new Audio();
     
    audio1.src = '../assets/Fox/HIYAAA.wav';
    audio2.src = '../assets/ROY/up-b.wav';
    button1.addEventListener('click', function(){
        audio1.play()
    })
    button2.addEventListener('click', function(){
        audio2.play()
    })


    const container = document.getElementById('container');
    const canvas = document.getElementById('canvas1');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    let audioSource;
    let analyzer;

    container.addEventListener('click', function(){
        let audio1 = new Audio();
        const audioCtx = new AudioContext();
        audio1.play();
        audioSource = audioContext.createMediaElementSource(audio1);
        analyzer = audioContext.createAnalyzer();
        audioSource.connect(analyzer);
        analyzer.connect(audioCtx.destination);
        analyzer.fftSize = 64;
        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const barWidth = canvas.width/bufferLength;
        let barHeight;
        let x = 0;

        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            analyzer.getByteFrequencyData(dataArray);
            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];
                ctx.fillStyle = 'white';
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);                
                x += barWidth
            }
            requestAnimationFrame(animate);
        }
        animate();
    })
})