import {
  createPost,
  getLoggedInUser,
  getPosts,
  editPost,
} from "./lib/services";
const walls = () => {
  //Crea una seccion
  const wallSection = document.createElement("section");
  //Para poner el título
  const title = document.createElement("h1");
  title.textContent = "Artie";
  //Crea la caja de texto (input)
  const inputPost = document.createElement("input");
  inputPost.id = "inPost";
  inputPost.placeholder = "Publica algo";
  //Crea el boton de publicar
  const btnSend = document.createElement("button");
  btnSend.textContent = "Publicar";
  btnSend.id = "btnSend";
  //Boton de editar post
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.id = "editButton";

  //Crea el espacio para las publicaciones
  const postSetion = document.createElement("article");
  postSetion.className = "post-section";
  const ul = document.createElement("ul");

  /* Evento para el botón publicar */
  /* Utilizo la importación con la función adPost */
  btnSend.addEventListener("click", () => {
    const comment = inputPost.value;
    const user = getLoggedInUser();
    createPost(comment, user.email);
    const arrPost = getPosts();
    //console.log("Funciona", arrPost);

    //Espacio del muro
    let muro = "";
    arrPost.forEach((element) => {
      console.log("cada elemento: ", element);
      muro += `
  <li class="publisher">${element.content}</li>`;
    });

    ul.innerHTML = muro;
  });
  editButton.addEventListener("click", () => {
    const editar = editPost;
    console.log("funciona", editar);
  });

  wallSection.append(title, inputPost, btnSend, postSetion, ul, editButton);

  return wallSection;
};
export default walls;
