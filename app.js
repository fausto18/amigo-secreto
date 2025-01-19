const inputNome = document.getElementById('amigo');
const btnAdicionar = document.querySelector('.button-add');
const listaNomes = document.getElementById('listaAmigos');
const btnSortear = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');
const btnLimpar = document.createElement('button'); // Botão para limpar a lista
btnLimpar.textContent = 'Limpar Lista';
btnLimpar.classList.add('button-clear');
btnSortear.parentNode.appendChild(btnLimpar); // Adiciona o botão após o botão de sortear
let nomes = [];

btnAdicionar.addEventListener('click', () => {
  const nome = inputNome.value.trim();
  if (nomes.includes(nome)) {
    alert('Este nome já foi adicionado.');
  } else if (nome === '') {
    alert('Por favor, digite um nome válido.');
  } else {
    nomes.push(nome);
    const li = document.createElement('li');
    li.textContent = nome;
    listaNomes.appendChild(li);
    inputNome.value = '';
  }
});

btnSortear.addEventListener('click', () => {
  if (nomes.length === 0) {
    alert('Adicione pelo menos um nome para realizar o sorteio.');
  } else {
    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.textContent = `O amigo secreto é: ${sorteado}!`;
    // Salvar resultado no localStorage (opcional)
    // localStorage.setItem('ultimoSorteio', sorteado);
  }
});

btnLimpar.addEventListener('click', () => {
  nomes = [];
  listaNomes.innerHTML = '';
  resultado.textContent = '';
});