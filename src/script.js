/*adding JS to form
making sure that every time we click on submit the form, 
we extract the info in the instruction input*/

function displayPoem(response) {
  console.log(response.data.answer);
  let poem = response.data.answer;
  poem = poem.replace("html", "").replace("```", "");
  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build the API URL
  // make a call to API using axios
  // Display generated poem
  let instruction = document.querySelector("#topic-input");
  let apiKey = "940836f57095o1a5bt3c042d91bb08f9";
  let context =
    "You are an expert in romance poetry and love to write poem. please generate 4 line poem in HTML basic format and separate each sentance with <br> and make sure to follow user instruction";
  let prompt = `user instruction: generate short poem about ${instruction.value} and sign Shecodes at the very end`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#form-generator");
poemForm.addEventListener("submit", generatePoem);
