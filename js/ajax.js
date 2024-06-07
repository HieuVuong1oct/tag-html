// $(document).ready(function(){
//     $("#txn").click(function(){
//         $("#data").load("txn.html");
//     })
//     $("#tnb").click(function(){
//         $("#data").load("tnb.html");
//     })   
// });

// $(document).ready(function(){
//     $("#txn").click(function(){
//         $("#data").load("txn.html", function(){ $("#tt").before("<p>Đã nạp xong</p>") });
//     })
//     $("#tnb").click(function(){ $("#data").load("tnb.html", xong);  })   
// });
// function xong(codehtml, status){
//     document.getElementById("tt").value=status;
//     alert(codehtml);
// }

// $(document).ready(function(){
//     $("#txn").click(function(){
//         $.get("txn.html","", function(d){  $("#data").html(d); } );
//     })
//     $("#tnb").click(function(){ 
//         $.get("tnb.html", xong);  
//     })   
// });
// function xong(codehtml, status){
//     $("#data").html(codehtml); 
//     $("#tt").val(status);
// }

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         var d = $("[name='frm1']").serialize();
//         alert(d);
//     });
// });   

// $(document).ready(function(){
//     $("#xemds").click(function(){
//         $.getJSON("Student.php","", xuly );
//     })           
// });
// function xuly(data, status){
//    console.log(data); 
// }

// $(document).ready(function(){
//     $("#xemds").click(function(){
//         $.getJSON("Student.php","", xuly );
//     })           
// });
// function xuly(data, status){// console.log(data);
//     $.each(data, function(key, value){
//         $("#kq").append("<p>"  + key + " = " + value + "</p>");
//     }); 
// }

// $(document).ready(function(){
//     $("#xemds").click(function(){
//         $.getJSON("Student.php","", xuly );
//     })           
// });
// function xuly(data, status){
//     console.log(data);
//     if (Array.isArray(data)) {
//         $.each(data, function(i, obj){
//             console.log(obj);
//             if (typeof obj === 'object' && obj !== null) {
//                 $.each(obj, function(key, value){
//                     $("#kq").append("<p>" + key + " = " + value + "</p>");
//                 });
//                 $("#kq").append("<hr>");
//             } else {
//                 console.log("Đối tượng không hợp lệ:", obj);
//             }
//         });
//     } else {
//         console.log("Dữ liệu không phải là mảng:", data);
//     }
// }

$(document).ready(function(){
    $("#txn").click(function(){  
        $.ajax({
            url:"txn.html",
            cache:false,
            type:"get",
            success:function(d){
                $("#data").html(d);
            },                
        })
    }) 

    $("#tnb").click(function(){  
        $.ajax({
            url:"tnb.html",
            cache:false,
            type:"get",
            success:function(data,status){
                xong(data,status)
            },                
        })
      
            function xong(codehtml, status){
                $("#data").html(codehtml); 
                $("#tt").val(status);
            }
    }) 
});