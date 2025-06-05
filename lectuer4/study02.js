//เรียกใช้งาน Module แบบ commonJS
const { dataX, showWow } = require('./my-module01');
const { sumNuber } = require('./my-module02');

console.log(dataX);
showWow();
console.log(sumNuber(10, 20));