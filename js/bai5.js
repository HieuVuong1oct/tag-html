//bài 5

function catChuoi(){
    let a = prompt("Nhập chuỗi hơn 15 kí tự: ");
    console.log(a.slice(0,10),"...");
}
console.log(catChuoi());