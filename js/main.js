const form = document.getElementById("novoItem")
const lista = document.getElementById('lista')

form.addEventListener("submit", (evento) => {
    // Sem o preventDefault, o formulário será enviado  
    // e o comportamento não será percebido. 
    evento.preventDefault() 
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
        
    // Adiciona o elemento novoItem 
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    
    lista.appendChild(novoItem)
}
