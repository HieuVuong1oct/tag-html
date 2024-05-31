//bài 7

function soChan(){
    let a = [1,4,3,2,5,6];
    let b = [];
    for (var i=0;i<=a.length;i++){
        if(a[i]%2==0){
            b.push(a[i]);
        }
    }
    for(var i=0;i<=b.length;i++){
        let c;
        for(var j = i+1;j<=b.length;j++){
            if(b[i]<b[j]){
                c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
       
    }
    // b.sort((a,b) => a - b );
    console.log(b);
}
console.log(soChan());
