function openImage(src) {
    let overlay = document.getElementById("overlay");
    let largeImage = document.getElementById("largeImage");

    largeImage.src = src;
    overlay.style.display = "flex";
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}