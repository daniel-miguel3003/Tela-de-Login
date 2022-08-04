document.getElementById("olho").addEventListener("mousemove", function () {
  document.getElementById("pass").type = "text";
});

document.getElementById("olho").addEventListener("mouseout", function () {
  document.getElementById("pass").type = "password";
});
