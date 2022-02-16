function guardaTarefa(){
  let valorInput = document.getElementById('texto-tarefa').value // valor do input armazenado numa variavel
  let lis = document.createElement('li') // cria elemento li
  let textInput = document.createTextNode(valorInput)

  lis.appendChild(textInput) // cria um nó de texto para elemento li criado com o valor do input
      document.querySelector('ol').appendChild(lis)
      document.getElementById('texto-tarefa').value=''; //apaga o valor do input

}

// Requisito 7 e 8
let lista = document.getElementById('lista-tarefas')
lista.addEventListener('click', event =>{
  let li = event.target
  for (let i = 0; i < lista.children.length; i+= 1){
        lista.children[i].id = ''
        li.id = 'color'
      }
})

// Requisito 9
lista.addEventListener('dblclick', event => {
  if(event.target.tagName === 'LI'){
       event.target.classList.toggle('completed')
   }
})

// 
function apagar(){
let listaItemAdd = document.getElementById('lista-tarefas')
listaItemAdd.innerHTML = ""
}

// apaga o que foi finalizado
function apagarConcluida(){
 listaItemComplet = document.querySelectorAll('.completed')
 for(i in listaItemComplet){
      listaItemComplet[i].remove
     }
}
let btnFinalizado = document.getElementById('remover-finalizados')
btnFinalizado.addEventListener('click', apagarConcluida)
  
// salva as informações de usuario
