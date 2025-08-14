//1st example using script.js in nodejs 
//let n=5
// for(let i=0;i<n;i++){
//     console.log("Hello World");
// }  
// console.log(process.argv);


//2nd example using figlet in nodejs in global scope
// const figlet = require("figlet");
// figlet(" Swayam ", function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


//3rd example using import in  nodejs by improting maths.js
// To run this, ensure you have set "type": "module" in package.json
//for this npm init in folder and then add "type": "module" in package.json
import{sum,sub,mul,div} from "./maths.js";
let a=10;   
let b=5;
console.log("Sum is: ", sum(a,b));