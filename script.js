const css = document.querySelector("h3");
const color_1 = document.getElementById("color_1");
const color_2 = document.getElementById("color_2");
const body = document.getElementById("gradient_bg");

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;
}

color_1.addEventListener("input", () => {
    setGradient();
});

color_2.addEventListener("input", () => {
    setGradient();
});