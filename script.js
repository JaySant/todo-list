function guardaTarefa() {
  const valorInput = document.getElementById('texto-tarefa').value; // valor do input armazenado numa variavel
  const lis = document.createElement('li'); // cria elemento li
  const textInput = document.createTextNode(valorInput);

  lis.appendChild(textInput); // cria um nó de texto para elemento li criado com o valor do input
  document.querySelector('ol').appendChild(lis);
  document.getElementById('texto-tarefa').value = '';
}
guardaTarefa();

// Requisito 7 e 8
const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', (event) => {
  const li = event.target;
  for (let i = 0; i < lista.children.length; i += 1) {
    lista.children[i].id = '';
    li.id = 'color';
  }
});

// Requisito 9
lista.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

// Requisito 10
function apagar() {
  const listaItemAdd = document.getElementById('lista-tarefas');
  listaItemAdd.innerHTML = '';
}
apagar();

// Requisito 11
function clean() {
  const listaComplet = document.querySelectorAll('.completed');
  for (let index = 0; index < listaComplet.length; index += 1) {
    listaComplet[index].remove();
  }
}
clean();

// function salvarList() {
//   const listaCriada = document.getElementById('lista-tarefas').innerHTML
//   localStorage.setItem('list', listaCriada)
// }
// salvarList()

function cleanSelected() {
  const listaSelect = document.querySelectorAll('#color');
  for (let index = 0; index < listaSelect.length; index += 1) {
    listaSelect[index].remove();
  }
}
cleanSelected();



