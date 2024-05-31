//bài 4

function giaiThua(a){
        if(Number.isInteger(a)) {
                   
            if(a>=0){ 
                if(a==0){
                return 1;
            }else{
               
                return a*giaiThua(a-1);
            }
        } 

        }else{  
            console.log(a, "không là số nguyên, không có kết quả");
        }
}
console.log("Kết quả giai thừa: ",giaiThua(6));