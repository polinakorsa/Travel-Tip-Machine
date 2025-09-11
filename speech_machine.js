const textToAudio = () => {
    const quoteSpoken = document.getElementById("quote").innerText;

    let speech = new SpeechSynthesisUtterance(quoteSpoken);
    speech.lang = "en-UK";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;


    window.speechSynthesis.speak(speech);
};

const speakBtn = document.getElementById('speakBtn');
speakBtn.addEventListener("click", textToAudio);



