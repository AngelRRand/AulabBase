let moon = document.querySelector('#moon')

moon.addEventListener("click", toggleTheme);

function toggleTheme() {
  const rootElement = document.documentElement;

  rootElement.classList.toggle("dark");
}