const toggle = document.getElementById("toggle");
const toggleImg = document.getElementById("toggle-img");
const theme = window.localStorage.getItem("theme");
const header = document.getElementById("header");

const configScrollReveal = {
  duration: 500,
  distance: "30px",
  origin: "bottom",
  reset: true,
  viewFactor: 0.5,
  scale: 0.9,
  easing: "ease-in-out",
  mobile: false,
}

/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */
if (theme === "dark") {
  document.body.classList.add("dark");
  toggleImg.src = "./assets/img/light-mode.png";
}

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
  window.location.reload();
});

fetch("https://api.github.com/users/fegroders/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

ScrollReveal().reveal('.projects', configScrollReveal);