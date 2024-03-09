
const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".questions");



questions.forEach(function (eachEuestion) {
  const btn = eachEuestion.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    

    questions.forEach(function (item) {
      if (item !== eachEuestion) {
        item.classList.remove("show-text");
      }
    });

    eachEuestion.classList.toggle("show-text");
  });
});


// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });