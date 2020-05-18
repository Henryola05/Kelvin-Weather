const kelvin = 0;
// constant kelvin 
const celsius = kelvin - 273;
// constant celsius
let fahrenheit = celsius * (9 / 5) + 32;
// constant fahrenheit
let newton = celsius * (33 / 100);
fahrenheit = Math.floor(fahrenheit);
// making fahrenheit a whole number
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
