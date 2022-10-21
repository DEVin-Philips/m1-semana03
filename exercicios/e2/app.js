console.log('m1-s03-e2');

const campo = document.getElementById('nome');
const botao = document.getElementById('botao');
const p = document.getElementById('paragrafo');

const mensagemOla = (nome) => `Olá, ${nome}!`;

// equivalente:
// const mensagemOla = (nome) => {
//   return "Olá, " + nome + "!";
// };

//console.log(mensagemOla("Mariana"));
// "Olá, Mariana!"

botao.addEventListener('click', () => {
  const nome = campo.value;
  const mensagem = mensagemOla(nome);
  p.innerHTML = mensagem;
  console.log(mensagem);
});
