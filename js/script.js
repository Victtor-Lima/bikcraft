// ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if(element) {
    element.checked = true;
  }
  console.log(parametro)
}

parametros.forEach(ativarProduto)

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if(media) {
    galeriaContainer.prepend(img)
  } 
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);