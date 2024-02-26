
let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach((btn)=> {
    btn.addEventListener("click", (e)=> {
        const style = e.currentTarget.classList;

        if(style.contains("dcreament")) {
            count--;
        } else if (style.contains("increament")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});


