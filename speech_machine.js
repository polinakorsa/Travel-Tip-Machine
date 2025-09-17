const textToAudio = () => {
    const quoteSpoken = document.getElementById("quote").innerText;
    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(quoteSpoken);
    speech.lang = "en-UK";
    speech.volume = currVolume;
    speech.rate = currSpeed;
    speech.pitch = currPitch;

    window.speechSynthesis.speak(speech);
};

const speakBtn = document.getElementById('speakBtn');
speakBtn.addEventListener("click", () => textToAudio());
