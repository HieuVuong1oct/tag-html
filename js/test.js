
//STRING
// tìm chuỗi
// var a = ' hieuvuongg g';
// console.log(a.indexOf('v',9));

// //cắt chuỗi
// console.log(a.slice(0,4));

// //ghi đè
// console.log(a.replace('g','m'));
// console.log(a.replace(/g/g,'m'));

// //Chữ hoa, chữ thường
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// //Loại bỏ kí tự trắng đầu và cuối
// console.log(a.trim());


// //cắt chuỗi thành array
// var b = 'v,d,m,h';
// console.log(b.split(','));
// console.log(b.split(',',2));

// //lấy ra kí tự tương ứng
//  console.log(b.charAt(1))


 //ARRAY
//  var a = ['v','d','m','h'];
//  var b = [1]
//  console.log(a.length);
//  // chuyển sang chuỗi 
//  console.log(a.toString());
 
//  //chuyển sang chuỗi nhưng có thể thêm kí tự vào giữa các phần tử
//  console.log(a.join('-'));
 
//  //xóa đi phần tử ở cuối và trả về phần tử đã xóa
//  console.log(a.pop());
 
//  //thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
//  a.push('c');
//  console.log(a);
 
//  //xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa
//  console.log(a.shift());
 
//  //thêm 1 hoặc nhiều phần tử ở đầu mảng và trả về độ dài mới của mảng
//  a.unshift('v','v');
//  console.log(a);
 
//  //xóa phần tử mảng
//  a.splice(0,2);
//  console.log(a);
 
//  //chèn vào mảng 
//  a.splice(0,0,'v');
//  console.log(a);
 
//  //ghép mảng 
//  console.log(a.concat(b))
 
//  //cắt và lấy ra một vài phần tử mảng mà k ảnh hưởng mảng gốc
//  console.log(a.slice(1,3))
 
 
//  //OBJECT
//  var user = {
//      name : 'Hieu',
//      age : '23'
//  }
//  var tuoi = 'age';
//  user.email = 'hieu@';
//  user['dia chi'] = 'HN';
//  console.log(user);
//  console.log(user[tuoi]);



//DOM
// console.log(document.getElementById('head1'));
// console.log(document.getElementsByClassName('head'));
// console.log(document.getElementsByTagName('div'))
// console.log(document.querySelector('.head'))
// console.log(document.querySelectorAll('.head'))
// console.log(document.querySelector('#head'))
// console.log(document.querySelectorAll('#head'))

// var testp = document.getElementById('head1')
// console.log(testp.innerHTML)
// testp.innerHTML = "Không chào"
// console.log(testp.innerText)
// console.log(testp.textContent)