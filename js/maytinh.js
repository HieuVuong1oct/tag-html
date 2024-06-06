const m = 'manhinh';

function reset(){
    let resetMh = document.getElementById(m);
    resetMh.innerText = '0';
}

function del(){
    let delMh = document.getElementById(m);
    delMh.innerText = delMh.innerText.slice(0,-1);
    if(delMh.innerText == ""){
        delMh.innerText = '0';
    }
}

function add(a){
    let addMh = document.getElementById(m);
    
    if(addMh.innerText === '0'){
        addMh.innerText = a;
    }else{
        addMh.innerText += a;
    }
    
    
    
}

function result(){
    let kq = document.getElementById(m);
    if (kq.innerText.includes('--')) {
        kq.innerText = kq.innerText.replace(/--/g, '+');
        
    }
    if(kq.innerText.includes('++')){
        kq.innerText = kq.innerText.replace('++', '+');
    }
    try{
        
        kq.innerText = eval(kq.innerText);
    }catch{
        kq.innerText= "error";
    
}
}


function cb2(){
    let cb = document.getElementById(m);
    try{
        cb.innerText = Math.sqrt(eval(cb.innerText));
    }catch{
        cb.innerText = "error";
    }
}


//  function m2(){
//     let bp = document.getElementById(m);
//     try {
//         bp.innerText = eval(bp.innerText**2);
        
//     } catch{
        
//         bp.innerText = "error";
//     }
//  }