//Function คือการทำงานหนึ่งๆ ***จะไม่ทำงานหากไม่ถูกเรียกใช้ (call function)***
// มี 4 ประเภท
//1. no parameter, no return
function sauFunc1() {
    console.log('wow...');
}

//2. have parmeter, no return
function sauFunc2(aa, bb) {
    console.log(aa);
    console.log(bb);
}

//3. no parmeter, has
function sauFunc3() {
    console.log('woo...');
    return 123456;
}

//4. have parmeter, has return
function sauFunc4(aa, bb, cc, dd) {
    return aa + bb + cc + dd;
}
//-------------------------------
sauFunc1();
sauFunc1();
sauFunc2(10, 20);//ข้อมูลที่ส่งให้พารามิเตอร์เรียกว่า Argument
sauFunc2(5, 10);
sauFunc1();
//---------------------------------
console.log('--------------');
let x1 = sauFunc3();
console.log(sauFunc3());
const x2 = sauFunc4(10, 20, 30, 40);
console.log(sauFunc4(11, 22, 33, 44));
console.log(`X1 : ${x1}`);
console.log(`X2 : ${x2}`);