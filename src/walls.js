import { createPost, getLoggedInUser, getPosts } from "./lib/services";
const walls = () => {
  const wallSection = document.createElement("section");
  const inputPost = document.createElement("input");
  inputPost.id = "inPost";
  const btnSend = document.createElement("button");
  btnSend.textContent = "Publicar";
  btnSend.id = "btnSend";
  const postSetion = document.createElement("article");
  postSetion.className = "post-section";
  wallSection.append(inputPost, btnSend, postSetion);

  /* Evento para el botón publicar */
  /* Utilizo la importación con la función adPost */
  btnSend.addEventListener("click", () => {
    const comment = inputPost.value;
    const user = getLoggedInUser();
    console.log("funciona el click", comment);
    console.log(user.email);
    createPost(comment, user.email);
  });

  return wallSection;
};

export default walls;
