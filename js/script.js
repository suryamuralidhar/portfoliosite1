/* =========================
   LOAD NAVBAR
========================= */

fetch("components/navbar.html")
.then(response => response.text())
.then(data => {
document.getElementById("navbar").innerHTML = data;
});


/* =========================
   LOAD FOOTER
========================= */

fetch("components/footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});


/* =========================
   360 VIEWER INITIALIZATION
========================= */

window.addEventListener("load", function(){

if(typeof CONFIG === "undefined"){
console.error("CONFIG file not loaded");
return;
}


/* Apply config text */

document.title = CONFIG.title;

const spaceBar = document.getElementById("spaceBar");
if(spaceBar){
spaceBar.innerText = CONFIG.heading;
}

const popupText = document.getElementById("popupText");
if(popupText){
popupText.innerHTML = CONFIG.popupText;
}

const popupButton = document.getElementById("popupButton");
if(popupButton){
popupButton.innerText = CONFIG.popupButton;
}


/* Start panorama viewer */

if(document.getElementById("panorama")){

pannellum.viewer('panorama', {

type: "equirectangular",
panorama: CONFIG.panoramaImage,
autoLoad: true,
friction: CONFIG.dragFriction

});

}


/* Show mobile popup */

setTimeout(function(){

if(window.innerWidth < CONFIG.mobileWidth){

const popup = document.getElementById("mobilePopup");

if(popup){
popup.style.display="flex";
}

}

},CONFIG.popupDelay);

});


/* =========================
   FULLSCREEN BUTTON
========================= */

function openFullscreen(){

var elem = document.getElementById("panorama");

if (elem && elem.requestFullscreen) {
elem.requestFullscreen();
}

}


/* =========================
   DUMMY BUTTONS
========================= */

function arMode(){}

function vrMode(){}


/* =========================
   CLOSE POPUP
========================= */

function closePopup(){

const popup = document.getElementById("mobilePopup");

if(popup){
popup.style.display="none";
}















   //rev 3

window.addEventListener("load", function(){

/* ---------- DEBUG PANEL ---------- */

const debugBox = document.getElementById("musicDebug");
function debug(msg){
    if(debugBox) debugBox.innerText = msg;
}

debug("Music Debug: Script loaded");


/* ---------- APPLY CONFIG ---------- */

if(typeof CONFIG === "undefined"){
    debug("Music Debug: CONFIG not found");
    return;
}

document.title = CONFIG.title;

const spaceBar = document.getElementById("spaceBar");
if(spaceBar){
    spaceBar.innerText = CONFIG.heading;
}


/* ---------- START PANORAMA VIEWER ---------- */

try{

    pannellum.viewer("panorama", {
        type: "equirectangular",
        panorama: CONFIG.panoramaImage,
        autoLoad: true,
        friction: CONFIG.dragFriction
    });

    debug("Music Debug: Viewer started");

}catch(e){

    debug("Music Debug: Viewer error");
    console.error(e);
}


/* ---------- MUSIC SYSTEM ---------- */

const music = document.getElementById("bgMusic");

if(!music){
    debug("Music Debug: Audio element missing");
    return;
}

music.src = CONFIG.musicFile;
music.loop = true;
music.preload = "auto";

music.load();

music.addEventListener("canplaythrough", ()=>{
    debug("Music Debug: Audio ready");
});

music.addEventListener("error", ()=>{
    debug("Music Debug: Audio error");
});


/* ---------- START MUSIC ON FIRST CLICK ---------- */

let started = false;

document.addEventListener("click", function(){

    if(started) return;

    music.play().then(()=>{

        /* APPLY VOLUME AFTER PLAY */

        music.volume = CONFIG.musicVolume;

        debug("Music Debug: Playing");

        started = true;

    }).catch(err=>{

        debug("Music Debug: Autoplay blocked");

        console.error(err);

    });

});


});


/* ---------- FULLSCREEN BUTTON ---------- */

function openFullscreen(){

const elem = document.getElementById("panorama");

if(elem.requestFullscreen){
    elem.requestFullscreen();
}

}




   
}

