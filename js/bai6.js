//bài 6

function vietHoa(){
    let a = prompt("Nhập chuỗi: ");
    let b = a.toLowerCase();
    let c = b.charAt(0).toUpperCase() + b.slice(1);
    console.log(c);
    
}
console.log(vietHoa());