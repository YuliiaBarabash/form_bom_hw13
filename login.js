const form = document.querySelector("form");
const loader = document.querySelector("img");
const login = document.querySelector("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  console.log("Email:", email);
  console.log("Password:", password);

  loader.style.display = "block";
  form.style.display = "none";

  setTimeout(function () {
    loader.style.display = "none";
    window.location.href = "./profile_page.html";
  }, 2000);
});
