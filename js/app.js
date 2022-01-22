const info = document.querySelector(".basics");
const infoTrigger = document.querySelector(".basics-button");
const infoTriggerClose = document.querySelector(".basics-button-close");
const mainSquare = document.querySelector("#overlay");

infoTrigger.addEventListener('click', () => { shot() });
infoTriggerClose.addEventListener('click', () => { shotClose() });


function shot() {
    info.style.cssText = "width:80%;transition:650ms";
    mainSquare.classList.toggle("darkOverlay");
}

function shotClose() {
    info.style.cssText = "margin-left:-80%;transition:350ms";
    mainSquare.classList.remove("darkOverlay");
}

function reloadPageFrom() {
    if (window.matchMedia("min-width: 992px")) {
        info.style.marginLeft = "0%";
    }
}