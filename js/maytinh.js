const m = 'manhinh';
// nội dung ô hiển thị ban đầu bằng 0
function reset(){
    let resetMh = document.getElementById(m);
    resetMh.innerText = '0';
}
// xóa kí tự cuối cùng ô hiển thị
function del(){
    let delMh = document.getElementById(m);
    delMh.innerText = delMh.innerText.slice(0,-1);
    if(delMh.innerText == ""){
        delMh.innerText = '0';
    }
}
// thêm kí tự vào ô hiển thị , nếu kí tự đang là 0 thay bằng kí tự mới
function add(a){
    let addMh = document.getElementById(m);
    if(addMh.innerText === '0'){
        addMh.innerText = a;
    }else{
        addMh.innerText += a;
    }
}
// tính toán và hiển thị kết quả
function result(){
    let kq = document.getElementById(m);
    try{
        kq.innerText = eval(kq.innerText);
    }catch{
        kq.innerText = "error";
    }
    
}

//căn bậc 2
function cb2(){
    let cb = document.getElementById(m);
    try{
        cb.innerText = Math.sqrt(eval(cb.innerText));
    }catch{
        cb.innerText = "error";
    }
}

//mũ 2
//  function m2(){
//     let bp = document.getElementById(m);
//     try {
//         bp.innerText = eval(bp.innerText**2);
        
//     } catch{
        
//         bp.innerText = "error";
//     }
//  }