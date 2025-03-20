function changeFontSize(value) {
    let text = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(text).fontSize);
    let newSize = currentSize + value;
    text.style.fontSize = newSize + "px";
}