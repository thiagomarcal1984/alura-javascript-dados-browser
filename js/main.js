const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault() 
    // Sem o preventDefault, o formulário será enviado  
    // e o comportamento não será percebido. 

    console.log(evento)
    console.log(evento.target[0])
    console.log(evento.target.elements['nome'])
    console.log(evento.target.elements['quantidade'])
})
