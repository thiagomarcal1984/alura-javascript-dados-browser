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

    // Criação do array que será guardado no LocalStorage.
    const itemAtual = {
        "nome" : nome.value,
        "quantidade" : quantidade.value,
    }

    criaElemento(itemAtual)
    
    items.push(itemAtual)

    localStorage.setItem("items", JSON.stringify(items))

    // Limpando o formulário após a inserção.
    nome.value = ""
    quantidade.value = ""
})

// A função criaElemento trata da exibição dos dados na listagem.
function criaElemento(itemAtual) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = itemAtual.quantidade
        
    // Adiciona o elemento novoItem 
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += itemAtual.nome
    
    lista.appendChild(novoItem)
}
