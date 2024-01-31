import { login } from "./lib/services";
// file login finished
function inicioSesion(navigateTo) {
  const section = document.createElement("section");
  section.id = "sesionInicio";
  const title = document.createElement("h1");
  const buttonReturn = document.createElement("button");
  buttonReturn.id = "btnReturn";
  const form = document.createElement("form");
  form.id = "formulario";
  const inputEmail = document.createElement("input");
  inputEmail.id = "inEmail";
  const inputPass = document.createElement("input");
  inputPass.id = "inPass";
  const buttonLogin = document.createElement("button");
  buttonLogin.id = "entrar";

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
