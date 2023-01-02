// JavaScript
const form = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Ambil teks komentar dari form
  const commentText = document.getElementById("comment-text").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  // Buat element HTML untuk menampilkan komentar
  const commentElement = document.createElement("div");
  commentElement.innerHTML = ` 
  <div class="cont-confes1">
  <div class="container-pconfes">
  <p class="p-confes">${'From: ' + from}</p>
  <p class="p-confes">${'To: ' + to}</p>
  <p class="p-confes">${'Message: ' + commentText}</p> 
  </div>
  </div>
  `;

  // Tambahkan komentar ke daftar komentar
  commentList.appendChild(commentElement);

  // Bersihkan form
  form.reset();
});

