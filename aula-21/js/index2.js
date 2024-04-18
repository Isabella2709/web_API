const botaoaumentar = document.querySelector("#aumentar"); // seleciona o botao
const botaodiminuir = document.querySelector("#diminuir");

const contador = document.querySelector("#contador");

const input = document.querySelector("#input");

/*button.addEventListener('click', (event) => {
   alert('Você clicou no botao');
}) // adiciona um evento ao clicar
*/

botaoaumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);

  contador.textContent = valorAtual + 1;

  botaoaumentar.classList.add("btn");
  botaodiminuir.classList.remove("btn");
}); // essa arrown function aumenta um numero no contador da tela

botaodiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);

  contador.textContent = valorAtual - 1;

  botaodiminuir.classList.add("btn");
  botaoaumentar.classList.remove("btn");

  //consegue remover ou aidicionar a estilização do botao conforme o clique
});

input.addEventListener("input", () => {
  console.log(input.value);
}); // dispara o evento e mostra cada coisa digitada naquele momento, em tempo real

//alterar o tema de claro para escuro

//adiconando estilos em line no elemeto contador

contador.style.color = "red";
contador.style.padding = "0 2rem";

// alterando a cor do elemento e o padding no js

//manipular classes
// conseguimos adicionar ou remover classes ultilizando o js

//console.log(botaodiminuir.classList);

//botaoaumentar.classList.add("btn");


window.onload = () => {
  const themeButton = document.querySelector('#mudartema'); // corrigido para #mudartema
  let darkTheme = localStorage.getItem('isDarkTheme') === "true";
  const body = document.querySelector("body");
  
  if(darkTheme){
      body.style.backgroundColor = "grey";
      body.style.color = 'white';
  } else {
      body.style.backgroundColor = "white";
      body.style.color = 'black'; 
  }

  themeButton.addEventListener('click', () =>{
      darkTheme = !darkTheme;
      localStorage.setItem("isDarkTheme", darkTheme);

      if(darkTheme){
          body.style.backgroundColor = "grey";
          body.style.color = 'white';
      } else {
          body.style.backgroundColor = "white";
          body.style.color = 'black'; 
      }
  });
}


//Web storage API
/*local storage ele salva os dados de forma que, independente se o navegador for fechado ou não 
ja o SessionStorage ele não salva e fica temporario quando o navegador for fechado ele n vai ter 
armazenado nada e ambos são objetos*/
