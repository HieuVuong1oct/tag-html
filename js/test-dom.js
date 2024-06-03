// document.addEventListener("DOMContentLoaded", timKiem);

// function timKiem() {
//   const bam = document.getElementById("show_search_advance");
//   const hien = document.getElementById("search_advance");

//   function bamvao() {
//     if (hien.style.display === "none" || hien.style.display === "") {
//       hien.style.display = "block";
//       bam.textContent = "Ẩn tìm kiếm nâng cao";
//     } else {
//       hien.style.display = "none";
//       bam.textContent = "Tìm kiếm nâng cao";
//     }
//   }
//   bam.addEventListener("click", bamvao);
// }

// var button = document.getElementsByTagName("input");
// for (let i = 0; i < button.length; i++) {
// //   console.log(11111111111, button[i]);
//   button[i].addEventListener("click", xoa);
//   function xoa() {
//     var parent = button[i].parentElement.parentElement;
//     parent.remove();
//   }
// }


function check(){
  var data = new Array();
 data[0] = document.getElementById('name').value;
 data[1] = document.getElementById('email').value;
 data[2] = document.getElementById('password').value;
 data[3] = document.getElementById('cpassword').value;

 var myerror = new Array();
 myerror[0] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập tên</span>";
 myerror[1] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập email</span>";
 myerror[2] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập mật khẩu</span>";
 myerror[3] = "<span style='color:red,font-weight:bold'>Mật khẩu chưa khớp</span>";

 var nearby = new Array("z-name", "z-email", "z-password", "z-cpassword");

 for(var i=0;i<data.length;i++){
  var error = myerror[i];
        var div = nearby[i];
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "OK!";
        }
 }

 
}
function passwordc(){
  var p1 = document.getElementById("password").value;
  var p2 = document.getElementById("cpassword").value;
  if(p1==p2){
    document.getElementById('z-cpassword').innerHTML = "Mật khẩu đã khớp";

  }else{
    document.getElementById('z-cpassword').innerHTML = "<span color=’red’>Mật khẩu chưa khớp</span>";
  }
 }


