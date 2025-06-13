function displayPoem(response){

  new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 20,
  cursor: null,
});
}
function generatePoem (event) {
  event.preventDefault();


let instructionsInput = document.querySelector("#user-instructions");
  let apiKey="37e0696t42440f602b2208b4oaa25d1a";
  let prompt =`Write a short, beautifully written poem about ${instructionsInput.value}`;
  let context = "Act as a world-class poet with a refined mastery of language, rhythm, and emotional nuance. You specialize in crafting short but deeply beautiful poems, capable of evoking strong imagery and emotion within just a few lines. The poem should be elegant and lyrical, limited to no more than 4 lines. Each line should be separated by a <br> element. Use rich metaphors, subtle alliteration, and a graceful tone. Avoid clichés and aim for originality and emotional depth. Sign the poem with '-SheCodes AI 🪶' inside a <strong> element";
  let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement= document.querySelector ("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML=` <div class="generating">⏳Generating your poem about ${instructionsInput.value}</div>`;


  axios.get(apiURL).then(displayPoem);
}



let poemFormElement= document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
