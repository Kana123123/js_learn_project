//callback Function **********

let aa = () => console.log('wow wow wow');

let bb = (x, y) => x * y;

function test01(v1, v2) {
    v1();
    console.log('Hi...');
    console.log(v2(10, 20)); //callback Function
}

test01(aa, bb) //call Function
console.log('++++++++++++++++++++++++');
test01(bb, () => {
    console.log('1111');
    console.log('222');
    console.log('333');
    return m + n;
})

