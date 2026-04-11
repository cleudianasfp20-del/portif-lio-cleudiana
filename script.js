const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Site simples em HTML e CSS",
  },
  {
    nome: "Projeto 2",
    descricao: "Sistema com JavaScript",
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(div);
});
