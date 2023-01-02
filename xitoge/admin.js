// JavaScript
const form = document.getElementById("comment-form");
const commentList = document.getElementById("announce");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Ambil teks komentar dari form
  const commentText = document.getElementById("comment-text").value;
  const from = document.getElementById("from").value;
  // Buat element HTML untuk menampilkan komentar
  const commentElement = document.createElement("div");
  commentElement.innerHTML = ` 
  <div class="contfes-list1">
  <div class="cont-confes1">
  <div class="container-pconfes1">
  <h2 class="h2-announce1">Pengumuman<h2>
  <p class="p-confes1">${'From: ' + from}</p>
  <p class="p-confes1">${'Message: ' + commentText}</p> 
  </div>
  </div>
  </div>
  `;

  // Tambahkan komentar ke daftar komentar
  commentList.appendChild(commentElement);

  // Bersihkan form
  form.reset();
});

