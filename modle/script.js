const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".overflow-modal-container");

openBtn.addEventListener("click" , function(){
    modal.classList.add("open-modal");
})

closeBtn.addEventListener("click" , function(){
    modal.classList.remove("open-modal");
})
