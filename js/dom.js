
//Đổi màu đoạn văn
function chageColor(){
    var cd1 = document.querySelector('#d1');
    cd1.style.color = 'red';
    var cd2 = document.querySelector('#d2');
    cd2.style.color = 'yellow';
    var cd3 = document.querySelector('#d3');
    cd3.style.color = 'blue';
}
chageColor();

// thay nền trang
function chageBgColor(){
    var bgbody = document.body;
    bgbody.style.backgroundColor = 'green';
}
chageBgColor();

//thay đổi nội dung đoạn 2 thành giống đoạn 1 
//dùng id

// function copyContent(paragraph1, paragraph2){
//     var p1 = document.getElementById(paragraph1);
//     var p2 = document.getElementById(paragraph2);
//     var c1 = p1.innerText;
//     p2.innerText = c1;
// }
// copyContent('d1','d2');


// dùng thứ tự đoạn văn
function copyContent(paragraph1, paragraph2){
    var pg = document.querySelectorAll('p');
    paragraph1 = pg[1];
    paragraph2 = pg[2];
    var p1 = paragraph1.innerText;
    paragraph2.innerText = p1;
}
copyContent();

// thay đổi font chữ đoạn văn
function changeFontSize(x){
    var fs1 = document.getElementById('d1');
    var fs2 = document.getElementById('d2');
    var fs3 = document.getElementById('d3');
    fs1.style.fontSize = x +'px';
    fs2.style.fontSize = x +'px';
    fs3.style.fontSize = x +'px';
    
}
changeFontSize(100);