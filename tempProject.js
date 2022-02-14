

// creating a variable with the name kelvin
const kelvin = 293;
// converting kelvin to celsius
const celsius = kelvin - 273;
// calculating for fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// using a built-in Math object to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);