// Selecionar documentos html na page, usando o document

// 1- consegue pegar o elemento pelatag
const todosH1s = document.getElementsByTagName('h1');
//Consegue pegar quantos h1 existem na pagina

console.log(todosH1s[0]);


// 2 - Consegue pegar elementos por classe

const classeParagrafo = document.getElementsByClassName("parag1");

console.log(classeParagrafo[0]);

// 3 - Pegar elementos por nome

const emailinput = document.getElementsByName('email');
console.log(emailinput[0]);

// 4 - Pegar o elemento pelo ID

const pegarid = document.getElementById('olamundi');
console.log(pegarid);

// 5 - Query selector

const selector = document.querySelector('body > div');
console.log(selector);


console.clear();

const primeiroParagrafo = document.querySelector('p.paragrafo');
console.log(primeiroParagrafo);

console.log('textContent', primeiroParagrafo.textContent);
console.log('innerHTML', primeiroParagrafo.innerHTML);

primeiroParagrafo.textContent = 'Outra coisa';

console.log(primeiroParagrafo);

//text content considera que tudo é texto, ja o inner pega a tag em si



