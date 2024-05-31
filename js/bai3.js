//bài 3

function kiemTra(a,b){

    if(typeof(a)=='number' && typeof(b)=='number'){
       console.log("Hai tham số là number");
       if(a>b){
            console.log(a, " là số lớn");
       }else if(a<b){
        console.log(b, " là số lớn")
       }else{
        console.log("Hai số bằng nhau");
       }
    }else{
        console.log("Tham số không phải number");
    }
    
    
}
kiemTra(1,2);

// var thamSo1 = prompt("Nhập tham số thứ nhất: ");
// var thamSo2 = prompt("Nhập tham số thứ hai: ");
// var so1 = parseFloat(thamSo1);
// var so2 = parseFloat(thamSo2);
// if(!isNaN(so1) && !isNaN(so2)){
//     kiemTra(so1,so2);
    
// }else{
//     console.log("Tham số nhập vào sai");
// }