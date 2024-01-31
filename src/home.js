// archivo main.js finished
function home(navigateTo) {
  const section = document.createElement("section");
  section.id = "homeSection";
  const title = document.createElement("h1");
  title.textContent = "Artie";

  const buttonLog = document.createElement("button");
  buttonLog.textContent = "Iniciar Sesión";
  buttonLog.id = "btnlogin";

  const buttonRegister = document.createElement("button");
  buttonRegister.textContent = "Registro";
  buttonRegister.id = "btnRegistro";

  buttonLog.addEventListener("click", () => {
    navigateTo("/login");
  });

  buttonRegister.addEventListener("click", () => {
    navigateTo("/register");
  });

  section.append(title, buttonLog, buttonRegister);
  return section;
}

export default home;
