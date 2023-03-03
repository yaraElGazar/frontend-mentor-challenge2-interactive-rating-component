// Get the rating section
let btns = document.querySelector(".rating");

// Store the clicked circle
let clickedCircle;

// add event listener on the rating section
btns.addEventListener("click", function (event) {
  if (
    // check if the button is already clicked to remove the style
    event.target.classList.contains("circle") &&
    event.target.classList.contains("clicked")
  ) {
    event.target.classList.remove("clicked");
    // check if the clicked element is a circle
  } else if (event.target.classList.contains("circle")) {
    // remove clicked style from all the circles
    for (let i = 0; i < btns.children.length; i++) {
      btns.children[i].classList.remove("clicked");
    }
    // add clicked style to the clicked circle
    event.target.classList.add("clicked");

    // Store the clicked circle
    clickedCircle = event.target;
  }
});

// Submission
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function () {
  let card1 = document.querySelector("#card1");
  card1.style.display = "none";
  let card2 = document.querySelector("#card2");
  card2.style.display = "flex";

  // Setting the score
  let score = document.querySelector(".score");
  score.innerHTML = clickedCircle.innerHTML;
});
