function preusmeriNaBarselonu() {
    window.location.href = "barcelona.html";
}

function preusmeriNaMadrid() {
    window.location.href = "madrid.html";
}

function preusmeriNaAmsterdam() {
    window.location.href = "amsterdam.html";
}

function preusmeriNaLisabon() {
    window.location.href = "lisabon.html";
}

function preusmeriNaMinhen() {
    window.location.href = "minhen.html";
}

function preusmeriNaLondon() {
    window.location.href = "london.html";
}

function preusmeriNaIstanbul() {
    window.location.href = "istanbul.html";
}

function preusmeriNaMilano() {
    window.location.href = "milano.html";
}

function uvecajSliku1(element) {
     element.style.width = "550px";
     element.style.height = "350px";
 }
 
 function smanjiSliku1(element) {
     element.style.width = "500px";
     element.style.height = "300px";
 }

 document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#slideshow img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 3000);
});