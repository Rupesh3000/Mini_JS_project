const btn = document.querySelector("button");
const color = document.querySelector("span");
const container = document.querySelector(".container");
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click", function () {
    let hexColor = "#";

    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRaondomNumber()];
    }

    color.textContent = hexColor;
    container.style.backgroundColor = hexColor;
})

function getRaondomNumber() {
    return Math.floor(Math.random() * hex.length);
}