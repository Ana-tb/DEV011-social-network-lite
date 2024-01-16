import { register } from "./lib/services";
// file login finished
function registro(navigateTo) {
  const section = document.createElement("section");
  const title = document.createElement("h2");
  const buttonReturn = document.createElement("button");
  const form = document.createElement("form");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  const buttonRegister = document.createElement("button");

  inputEmail.placeholder = "Write email";
  inputPass.placeholder = "pass";

  title.textContent = "Register";
  buttonRegister.textContent = "go";
  buttonRegister.addEventListener("click", (e) => {
    e.preventDefault();
    const callback = register(inputEmail.value, inputPass.value);
    if (callback == true) {
      alert("Usuario registrado");
      navigateTo("/login");
    }

  });

  buttonReturn.textContent = "Return to home";
  buttonReturn.addEventListener("click", () => {
    navigateTo("/");
  });

  form.append(inputEmail, inputPass, buttonRegister);
  section.append(title, form, buttonReturn);

  return section;
}

export default registro;
