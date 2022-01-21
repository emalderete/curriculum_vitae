const info = document.querySelector(".basics");
const infoTrigger = document.querySelector(".basics-button");
const infoTriggerClose = document.querySelector(".basics-button-close");

infoTrigger.addEventListener('click', () => { shot() });
infoTriggerClose.addEventListener('click', () => { shotClose() });


function shot() {
    info.style.display = "block";
}

function shotClose() {
    info.style.display = "none";
}