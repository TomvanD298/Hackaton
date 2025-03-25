const fetched = await fetch('https://fdnd.directus.app/items/women_in_tech');
const fetchedJson = await fetched.json();

const engine = new liquidjs.Liquid();

// Get the template and divs
const template = document.querySelector('template');
const result = document.querySelector('.characterSelector');
const selectedIdDisplay = document.querySelector('#selectedIdDisplay');
const taglineDisplay = document.querySelector('#taglineDisplay');

// Render the list of women in the first section
engine.parseAndRender(template.innerHTML, { womans: fetchedJson.data }).then(html => {
  result.innerHTML = html;
  
  // Add an event listener for the radio buttons
  const radioButtons = result.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('change', (event) => {
      const selectedId = event.target.value; // Get the ID of the selected woman
      const selectedWoman = fetchedJson.data.find(woman => woman.id == selectedId); // Find the woman based on her ID
      
      // Display the selected woman's data in the second section
      displaySelectedWoman(selectedWoman);
      displaySelectedTagline(selectedWoman);
    });
  });
});


// Function to display the selected woman's information in the second section
function displaySelectedWoman(woman) {
    const flag = `https://countryflagsapi.netlify.app/flag/${woman.country_code}.svg`

  selectedIdDisplay.innerHTML = `
    <h2>${woman.name}</h2>
    <img src="https://fdnd.directus.app/assets/${woman.image}" alt="${woman.name}" />
    <p>${woman.period}</p>
    <img src="${flag}" alt="Flag of ${woman.country}" />

  `;
}

function displaySelectedTagline(woman) {
    taglineDisplay.innerHTML = `<h3>${woman.tagline}</h3>`; 
}

// // ------------ available properties
// // "data": [
// // {
// //  "id":
// // "name": 
// // "short_name": 
// // "tagline": 
// // "period": 
// // "website": 
// // "image": 
// // "country": 
// // "github": 
// // "codepen": 
// // "work": 
// // }