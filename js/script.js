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

}



