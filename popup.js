const settingsBtn = document.getElementById("audioSettingsBtn");
const settingsPopUp = document.querySelector(".settings-popup");

const volumeSlider = document.getElementById("volume-slider");
const pitchSlider = document.getElementById("pitch-slider");
const speedSlider = document.getElementById("speed-slider");
let currVolume = 1;
let currPitch = 1;
let currSpeed = 1;

settingsBtn.addEventListener("click", () => {
    settingsPopUp.classList.toggle("show")
})

volumeSlider.addEventListener("input", (event) => {
    currVolume = event.target.value / 100;
    event.preventDefault()
    textToAudio();
    localStorage.setItem('currVolume', JSON.stringify(currVolume))
});

pitchSlider.addEventListener("change", (event) => {
    currPitch = event.target.value / 50;
    event.preventDefault()
    textToAudio();
    localStorage.setItem('currPitch', JSON.stringify(currPitch))

});

speedSlider.addEventListener("change", (event) => {
    currSpeed = event.target.value / 50;
    event.preventDefault()
    textToAudio();
    localStorage.setItem('currSpeed', JSON.stringify(currSpeed))

});



