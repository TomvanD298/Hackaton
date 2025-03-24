const fetched = await fetch('https://fdnd.directus.app/items/women_in_tech');
const fetchedJson = await fetched.json();

const template = document.querySelector('template');
const result = document.querySelector('.result');
const engine = new liquidjs.Liquid();

//Use in the HTML the tagg "Womans" to call the api
engine.parseAndRender(template.innerHTML, {womans: fetchedJson.data}).then(html => result.innerHTML = html);



// ------------ available properties
// "data": [
// {
//  "id":
// "name": 
// "short_name": 
// "tagline": 
// "period": 
// "website": 
// "image": 
// "country": 
// "github": 
// "codepen": 
// "work": 
// }