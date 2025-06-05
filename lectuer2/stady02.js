//ตัวแปรใน javascript สร้างได้ 3 แบบ
//1 var แก้ไขได้ กำหนดค่าที่หลังได้ เป็น Global
var aa = 10;
var xx;
xx = 100;

//2. let แก้ไขได้ กำหนดค่าที่หลังได้ เป็นแบบ local คือใช้ได้เฉพาะที่
let bb = 20;
let yy;
yy = 200;

//3.const แก้ไชไม่ได้ กำหนดค่าที่หลังไม่ได้ ต้องกำหนดเลย เป็น local
const cc = 30;
// const zz; Error นะจ้ะ...

//------------------------------------
{
    var a = 10; //Global
    let b = 20; //Local
    const c = 30; //Local
    {
        var d = 40;//Global
        let e = 50;//Local
        const f = 60;//Local
        {
            var g = 70;//Global
            let h = 80;//Local
            const i = 90;//Local
        }
        console.log(b);
        console.log(f);
        console.log(i);
    }
}