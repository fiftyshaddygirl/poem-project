/*adding JS to form
making sure that every time we click on submit the form, 
we extract the info in the instruction input*/

function generatePoem(event) {
  event.preventDefault();
  let poem = "A crimson blush, a velvet grace";

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let poemForm = document.querySelector("#form-generator");
poemForm.addEventListener("submit", generatePoem);
