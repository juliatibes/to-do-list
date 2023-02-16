const listaTarefas = document.querySelector('#listaTarefas')
const caixaTexto = document.querySelector('#caixaDeTexto')
const botaoAdicionar = document.querySelector('#botaoAdicionar')

//Adiciona um novo li + texto da tarefa
botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value
    caixaTexto.value = ''

    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa))
    caixaTexto.focus();
})

function adicionaTarefa(textoDaTarefa) {
    const elementLi = document.createElement('li')
    const elementSpan = document.createElement('span')

    elementSpan.setAttribute('id','tarefa')
    elementSpan.textContent = textoDaTarefa

    elementLi.className = 'nao-realizada'
    elementLi.appendChild(elementSpan)
    elementLi.appendChild(adicionaBotaoRemover())

    //Conclusão de tarefa - alteração do CSS
    elementSpan.addEventListener('click', function(){
        if (this.id === 'tarefa') {
            if (this.parentNode.className === 'nao-realizada') {
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'nao-realizada'
            }
        }
    })

    return elementLi
}

function adicionaBotaoRemover(){
    const botaoRemover = document.createElement('button')
    botaoRemover.textContent = '✗'
    botaoRemover.className = 'remover'
    console.log(listaTarefas)

    //Remove li da tarefa
    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode)
    })

    return botaoRemover
}

