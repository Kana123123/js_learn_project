//Loop สำหรับ Array และ Object 
const arr = [10, 20, 30, 40,];

arr.forEach((xx) => {
    console.log(xx * 100);
})

console.log('-----------------')
const obj = {
    name: 'John',
    age: 20,
    city: 'New York'
}

for (let yy in obj) {
    console.log(obj[yy]);
}