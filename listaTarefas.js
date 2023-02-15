const listaTarefas = document.querySelector('#listaTarefas')
const caixaTexto = document.querySelector('#caixaDeTexto')
const botaoAdicionar = document.querySelector('#botaoAdicionar')

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value
    caixaTexto.value = ''

    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa))
})

function adicionaTarefa(textoDaTarefa) {
    const elementLi = document.createElement('li')
    const elementSpan = document.createElement('span')

    elementSpan.setAttribute('id','tarefa')
    elementSpan.textContent = textoDaTarefa

    elementLi.appendChild(elementSpan)
    return elementLi
}

