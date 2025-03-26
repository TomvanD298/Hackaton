const fetched = await fetch("https://fdnd.directus.app/items/women_in_tech");
const fetchedJson = await fetched.json();

const engine = new liquidjs.Liquid();

// Get the template and divs
const template = document.querySelector("template");
const result = document.querySelector(".characterSelector");
const selectedIdDisplay = document.querySelector("#selectedIdDisplay");
const taglineDisplay = document.querySelector("#taglineDisplay");

// Render the list of women in the first section
engine.parseAndRender(template.innerHTML, { womans: fetchedJson.data }).then((html) => {
  result.innerHTML = html; // Insert the rendered HTML

  const randomWoman = Math.floor(Math.random() * fetchedJson.data.length);

  // Select and check the first radio button after rendering
  const firstRadio = result.querySelector(`ul li:nth-child(${randomWoman}) input[type='radio']`);
  if (firstRadio) { 
    firstRadio.checked = true;

    // Find the corresponding woman and update UI
    const selectedWoman = fetchedJson.data.find(woman => woman.id == firstRadio.value);
    if (selectedWoman) {
      displaySelectedWoman(selectedWoman);
      displaySelectedTagline(selectedWoman);
    }
  } else {
    console.log("Radio button not found");
  }

  // Add event listener for radio buttons
  const radioButtons = result.querySelectorAll("input[type='radio']");
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const selectedId = event.target.value;
      const selectedWoman = fetchedJson.data.find((woman) => woman.id == selectedId);

      // Display selected woman's data
      displaySelectedWoman(selectedWoman);
      displaySelectedTagline(selectedWoman);
    });
  });
});



// Function to display the selected woman's information in the second section
function displaySelectedWoman(woman) {
    const flag = `https://countryflagsapi.netlify.app/flag/${woman.country_code}.svg`

  selectedIdDisplay.innerHTML = `
<div class="container">
              <div class="card-wrapper">
                <div class="card" data-period="${woman.period}">
                  <img
                    src="https://fdnd.directus.app/assets/${woman.image}"
                    alt="${woman.name}"
                  />
                  <div class="info">
                    <p>${woman.name}</p>
                    <p>${woman.period}</p>
                    <p>${woman.country}</p>
                    <img src="${flag}" alt="Flag of ${woman.country}" />
                  </div>
                </div>

                <div class="card-shadow1"></div>
                <div class="card-shadow2"></div>
                <div class="card-shadow3"></div>
              </div>
              <div class="shadow"></div>
            </div>
    
  `;
}

function displaySelectedTagline(woman) {
    taglineDisplay.innerHTML = `<h3>${woman.tagline}</h3>`; 
}



