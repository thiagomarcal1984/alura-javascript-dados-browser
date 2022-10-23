const form = document.getElementById("novoItem")
const lista = document.getElementById('lista')
const items = JSON.parse(localStorage.getItem('items')) || []

items.forEach( (elemento) => {
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento) => {
    // Sem o preventDefault, o formulário será enviado  
    // e o comportamento não será percebido. 
    evento.preventDefault() 
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    criaElemento(nome.value, quantidade.value)

    // Limpando o formulário após a inserção.
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
        
    // Adiciona o elemento novoItem 
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    
    lista.appendChild(novoItem)

    // Criação do array que será guardado no LocalStorage.
    const itemAtual = {
        "nome" : nome,
        "quantidade" : quantidade,
    }

    items.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(items))
}
