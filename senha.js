function caractere() {

    //Se o meu input estiver vazio, eu quero que o typing seja removido
    //mas se eu digitar e tiver um valor, eu quero que meu typing seja colocado
    var getInput = document.getElementById('email')
    var getInputValue = document.getElementById('email').value
    getInput.classList.add('typing-input')
    document.getElementById('text').classList.add('typing-span')
    
    if (getInputValue == "" || getInputValue.length == 0) {
        getInput.classList.remove('typing-input')
        document.getElementById('text').classList.remove('typing-span')
    } 
}
