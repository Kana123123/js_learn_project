//Function Expression คือ การเขียนฟังก์ชันให้อยู่ในรูปของนิพจน์
//1. Anonymus Function(ฟังก์ชันไม่มีชื่อ)
let aa = function () {
    console.log('Hello...');
}

let bb = function (x, y) {
    return x + y;
}

aa()
aa()
console.log(bb(10, 20));

//2.Arrow Function ***** (ฟังก์ชันที่ใฃ้เครื่องหมาย =>)