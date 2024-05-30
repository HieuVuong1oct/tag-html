// bài 1

// function chuyenDoi(){
//     let doC = prompt("Nhập độ C");
//     let dof = doC*(9/5)+32;
//     return dof;
// }
// console.log("Chuyển sang độ F là : " ,chuyenDoi());

//bài 2

// function saoChep(){
//     let chuoi = prompt("Nhập chuỗi : ");
//     let mang=[];
//     let chuoiMoi;
//     for(let i = 0; i<10;i++){
//        mang[i] = chuoi;
//     }
//      chuoiMoi = mang.join('-');
//     return chuoiMoi;
// }
// console.log("Chuỗi mới là: ",saoChep());

//bài 3

// function kiemTra(a,b){
//     if(typeof(a)=='number' && typeof(b)=='number'){
//        console.log("Hai tham số là number");
//        if(a>b){
//             console.log(a, " là số lớn");
//        }else if(a<b){
//         console.log(b, " là số lớn")
//        }else{
//         console.log("Hai số bằng nhau");
//        }
//     }else{
//         console.log("Tham số không phải number");
//     }
// }
// kiemTra(1,2);


// var thamSo1 = prompt("Nhập tham số thứ nhất: ");
// var thamSo2 = prompt("Nhập tham số thứ hai: ");
// var so1 = parseFloat(thamSo1);
// var so2 = parseFloat(thamSo2);
// if(!isNaN(so1) && !isNaN(so2)){
//     kiemTra(so1,so2); 
// }else{
//     console.log("Tham số nhập vào sai");
// }

//bài 4

// function giaiThua(a){
//         if(Number.isInteger(a)) {              
//             if(a>=0){ 
//                 if(a==0){
//                 return 1;
//             }else{
//                 return a*giaiThua(a-1);
//             }
//         } 
//         }else{  
//             console.log(a, "không là số nguyên, không có kết quả");
//         }
// }
// console.log("Kết quả giai thừa: ",giaiThua(6));

//bài 5

// function catChuoi(){
//     let a = prompt("Nhập chuỗi hơn 15 kí tự: ");
//     console.log(a.slice(0,10),"...");
// }
// console.log(catChuoi());

//bài 6

// function vietHoa(){
//     let a = prompt("Nhập chuỗi: ");
//     let b = a.toLowerCase();
//     let c = b.charAt(0).toUpperCase() + b.slice(1);
//     console.log(c);
// }
// console.log(vietHoa());

//bài 7

// function soChan(){
//     let a = [1,4,3,2,5,6];
//     let b = [];
//     for (var i=0;i<=a.length;i++){
//         if(a[i]%2==0){
//             b.push(a[i]);
//         }
//     }
//     for(var i=0;i<=b.length;i++){
//         let c;
//         for(var j = i+1;j<=b.length;j++){
//             if(b[i]<b[j]){
//                 c = b[i];
//                 b[i] = b[j];
//                 b[j] = c;
//             }
//         } 
//     }
//     // b.sort((a,b) => a - b );
//     console.log(b);
// }
// console.log(soChan());

//bài 8

// var a = prompt("Nhập username : ");
// var b = prompt("Nhập password : ");
// var c = prompt("Nhập confirm : ");
// var Taotk = {
//     username: a,
//     password: b,
//     confirm: c
// };
// function kiemTra(){
//     if(typeof Taotk.username === 'string' && Taotk.username.trim().length > 0 && Taotk.username.length <= 20 
//         && Taotk.password.length >= 6 && Taotk.password.length <= 32 && Taotk.confirm == Taotk.password){
//         console.log("Pass");
//     }else{
//         console.log("Fail");
//     }
// }
// kiemTra();


// var a = prompt("Nhập username : ");
// var b = prompt("Nhập password : ");
// var c = prompt("Nhập confirm : ");
// var Taotk = {
//     username: a,
//     password: b,
//     confirm: c
// };
// function kiemTra(){
//     switch (true) {
//         case (typeof Taotk.username === 'string' && Taotk.username.trim().length > 0 && Taotk.username.length <= 20 
//          && Taotk.password.length >= 6 && Taotk.password.length <= 32 && Taotk.confirm == Taotk.password):
//             console.log("Pass");
//             break;
//         default:
//             console.log("Fail");
//     }
// }
// kiemTra();



