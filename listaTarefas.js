const listaTarefas = document.querySelector('#listaTarefas')
const caixaTexto = document.querySelector('#caixaDeTexto')
const botaoAdicionar = document.querySelector('#botaoAdicionar')
const listaSuspensa = document.querySelector('#listaSuspensa')

//Adiciona um novo li + texto da tarefa
botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value
    caixaTexto.value = ''

    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
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

    //Remove li da tarefa
    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode)
        exibeOcultaListaSuspensa()
    })

    return botaoRemover
}

function exibeOcultaListaSuspensa(){
    const elementSpan = document.querySelector('#tarefa')

    if(elementSpan === null) {
       listaSuspensa.setAttribute('hidden', 'hidden') 
    } else {
        listaSuspensa.removeAttribute('hidden')
    }

}

listaSuspensa.addEventListener('change', function(){
    if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa')
        for(tarefa of vetorTarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if (listaSuspensa.selectedIndex === 3){
        const vetorBotoes = listaTarefas.querySelectorAll('.remover')
        for(botao of vetorBotoes) {
            botao.dispatchEvent(new Event('click'));
        }
    }
})

