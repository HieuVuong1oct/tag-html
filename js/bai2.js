//bài 2

function saoChep(){
    let chuoi = prompt("Nhập chuỗi : ");
    let mang=[];
    let chuoiMoi;
    for(let i = 0; i<10;i++){
       mang[i] = chuoi;
    }
     chuoiMoi = mang.join('-');
    return chuoiMoi;
}
console.log("Chuỗi mới là: ",saoChep());