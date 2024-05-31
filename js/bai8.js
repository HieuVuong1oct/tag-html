//bài 8

var a = prompt("Nhập username : ");
var b = prompt("Nhập password : ");
var c = prompt("Nhập confirm : ");

var Taotk = {
    username: a,
    password: b,
    confirm: c
};

function kiemTra(){
    if(typeof Taotk.username === 'string' && Taotk.username.trim().length > 0 && Taotk.username.length <= 20 
        && Taotk.password.length >= 6 && Taotk.password.length <= 32 && Taotk.confirm == Taotk.password){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
}

kiemTra();