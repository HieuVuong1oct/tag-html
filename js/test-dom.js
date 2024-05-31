document.addEventListener("DOMContentLoaded", timKiem);

function timKiem() {
  const bam = document.getElementById("show_search_advance");
  const hien = document.getElementById("search_advance");

  function bamvao() {
    if (hien.style.display === "none" || hien.style.display === "") {
      hien.style.display = "block";
      bam.textContent = "Ẩn tìm kiếm nâng cao";
    } else {
      hien.style.display = "none";
      bam.textContent = "Tìm kiếm nâng cao";
    }
  }
  bam.addEventListener("click", bamvao);
}

var button = document.getElementsByTagName("input");
for (let i = 0; i < button.length; i++) {
//   console.log(11111111111, button[i]);
  button[i].addEventListener("click", xoa);
  function xoa() {
    var parent = button[i].parentElement.parentElement;
    parent.remove();
  }
}
