import { login } from "./lib/services";
// file login finished
function inicioSesion(navigateTo) {
  const section = document.createElement("section");
  const title = document.createElement("h1");
  const buttonReturn = document.createElement("button");
  const form = document.createElement("form");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  const buttonLogin = document.createElement("button");

  inputEmail.placeholder = "Write email";
  inputPass.placeholder = "pass";

  title.textContent = "Login";
  buttonLogin.textContent = "go";
  buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const callback = login(inputEmail.value, inputPass.value);
    if (callback == true) {
      navigateTo("/walls");
    } else {
      alert("Email o contraseña erronea");
    }
  });

  buttonReturn.textContent = "Return to home";
  buttonReturn.addEventListener("click", () => {
    navigateTo("/");
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, form, buttonReturn);

  return section;
}

export default inicioSesion;
