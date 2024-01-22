// archivo main.js finished
function home(navigateTo) {
  const section = document.createElement("section");
  const title = document.createElement("h1");
  title.textContent = "Artie";

  const button = document.createElement("button");
  button.textContent = "login";

  const buttonRegister = document.createElement("button");
  buttonRegister.textContent = "Registro";

  button.addEventListener("click", () => {
    navigateTo("/login");
  });

  buttonRegister.addEventListener("click", () => {
    navigateTo("/register");
  });

  section.append(title, button, buttonRegister);
  return section;
}

export default home;
