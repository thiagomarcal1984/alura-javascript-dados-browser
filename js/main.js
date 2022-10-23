const form = document.getElementById("novoItem")
const lista = document.getElementById('lista')
const items = JSON.parse(localStorage.getItem('items')) || []

// A iteração a seguir preenche a lista com os dados do LocalStorage.
items.forEach( (elemento) => {
    criaElemento(elemento)
})

// A submissão do formulário controla a sequência geral da interação.
form.addEventListener("submit", (evento) => {
    // Sem o preventDefault, o formulário será enviado  
    // e o comportamento não será percebido. 
    evento.preventDefault() 
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = items.find( elemento => elemento.nome === nome.value)

    // Criação do array que será guardado no LocalStorage.
    const itemAtual = {
        "nome" : nome.value,
        "quantidade" : quantidade.value,
    }
    
    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        // Atualizar o array antes de salvar no LocalStorage
        items[existe.id] = itemAtual 
    } else {
        itemAtual.id = items.length
        criaElemento(itemAtual)
        // Atualizar o array antes de salvar no LocalStorage
        items.push(itemAtual)
    }


    localStorage.setItem("items", JSON.stringify(items))

    // Limpando o formulário após a inserção.
    nome.value = ""
    quantidade.value = ""
})

// A função criaElemento trata da exibição dos dados na listagem.
function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
        
    // Adiciona o elemento novoItem 
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    
    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    // Varre qualquer tag que tenha o atributo data-id igual ao ID do item.
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade
}
