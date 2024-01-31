import {
  createPost,
  getLoggedInUser,
  getPosts,
  editPost,
  deletePost,
  logout,
} from "./lib/services";
function walls(navigateTo) {
  //Crea una seccion
  const wallSection = document.createElement("section");
  wallSection.id = "sectionWall";
  //Para poner el título
  const title = document.createElement("h1");
  title.textContent = "Artie";
  //Crea la caja de texto (input)
  const inputPost = document.createElement("input");
  inputPost.id = "inPost";
  inputPost.placeholder = "Publica algo";
  //Crea el boton de publicar
  const btnSend = document.createElement("button");
  btnSend.id = "btnSend";
  btnSend.textContent = "Publicar";

  //Crea el espacio para las publicaciones
  const postSetion = document.createElement("article");
  postSetion.className = "post-section";
  //Crea las publicaciones en lista
  const ul = document.createElement("ul");

  //Boton de cerrar sesión
  //crea el boton de cerrar sesión
  const btnLogOut = document.createElement("button");
  btnLogOut.textContent = "Cerrar Sesión";
  btnLogOut.id = "cerrarSesion";

  wallSection.append(title, inputPost, btnSend, btnLogOut, postSetion, ul);

  const displayPost = () => {
    const arrPost = getPosts();
    //console.log("Funciona", arrPost);
    //Espacio del muro
    let muro = "";
    arrPost.forEach((element) => {
      muro += `
      <li class="publishers">
        <div class="publish">
        <img class="imgpublish" src="">
        <p> <br> ${element.email}</p> <br>
        <p id='${element.id}' class="contentText"> ${element.content}</p>
          <div value="${element.id}" class="botones">
          <button value="${element.id}" class="delet-button">Eliminar</button>
          <button value="${element.id}" class="edit-button">Editar</button>
          </div>
        </div>
      </li>`;
    });

    ul.innerHTML = muro;
    //*Boton de editar post
    const editButton = document.querySelectorAll(".edit-button");
    const postEdit = document.querySelectorAll(".contentText");
    const botones = document.querySelectorAll(".botones");
    console.log("editButton query...All: ", editButton, postEdit);
    editButton.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idPost = btn.value;
        postEdit.forEach((text) => {
          if (text.id === idPost) {
            console.log("el valor a editar", idPost, text.textContent);
            //inputPost.value = text.textContent;
            const btnU = document.createElement("button");
            btnU.textContent = "Update";
            const inputPostU = document.createElement("input");
            inputPostU.value = text.textContent;
            text.textContent = "";
            btn.remove();
            botones.forEach((container) => {
              container.append(btnU);
              text.append(inputPostU);
            });

            btnU.addEventListener("click", () => {
              editPost(idPost, inputPostU.value);
              inputPostU.remove();
              displayPost();
            });
          }
        });
      });
    });
    const deleteButton = document.querySelectorAll(".delet-button");
    deleteButton.forEach((btnD) => {
      btnD.addEventListener("click", () => {
        console.log("click eliminar");
        if (confirm("¿Seguro que quieres eliminar el post?")) {
          deletePost(btnD.value);
          displayPost();
        }
      });
    });
  };
  displayPost();

  /* Evento para el botón publicar */
  /* Utilizo la importación con la función adPost */
  btnSend.addEventListener("click", () => {
    const comment = inputPost.value;
    const user = getLoggedInUser();
    createPost(comment, user.email);
    inputPost.value = "";
    displayPost();
  });

  // });
  //const deleteButton = wallSection.querySelectorAll(".delet-button");
  //deleteButton.forEach((element) => {
  //element.addEventListener("click", () => {
  //const borrar = deletePost(idPost);
  //});
  //});

  btnLogOut.addEventListener("click", () => {
    logout();
    navigateTo("/");
  });

  return wallSection;
}
export default walls;
