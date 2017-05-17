var bgcolors = Array.from(document.querySelectorAll(".button-background-select .color-swatch"));
bgcolors.forEach(function(bgcolor) {
bgcolor.addEventListener("mouseover", function() {
var newColor = getComputedStyle(this).getPropertyValue("background-color");
document.documentElement.style.setProperty("--button-bg", newColor)
})
})

