const css = document.querySelector("h3");
const color_1 = document.getElementById("color_1");
const color_2 = document.getElementById("color_2");
const body = document.getElementById("gradient_bg");
const btn = document.getElementById("rand_btn");

body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;
css.textContent = body.style.background + ";"

const random_hex_color_code = () => {
    let n_1 = (Math.random() * 0xfffff * 1000000).toString(16);
    let n_2 = (Math.random() * 0xfffff * 1000000).toString(16);
    color_1.value = '#' + n_1.slice(0, 6);
    color_2.value = '#' + n_2.slice(0, 6);

    body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;
    css.textContent = body.style.background + ";"
};

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;

    css.textContent = body.style.background + ";"
}

color_1.addEventListener("input", () => {
    setGradient();
});
color_2.addEventListener("input", () => {
    setGradient();
});
btn.addEventListener("click", random_hex_color_code);