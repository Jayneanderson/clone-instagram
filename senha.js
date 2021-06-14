/* function caractere() {

    //Se o meu input estiver vazio, eu quero que o typing seja removido
    //mas se eu digitar e tiver um valor, eu quero que meu typing seja colocado
    var getInput = document.getElementById('email')
    var getInputValue = document.getElementById('email').value
    document.getElementById('text').classList.add('typing-span')
    getInput.classList.add('typing-input')

    if (getInputValue == "" || getInputValue.length == 0) {
        getInput.classList.remove('typing-input')
        document.getElementById('text').classList.remove('typing-span')
    }
}

function caracterePassword() {

    //Se o meu input estiver vazio, eu quero que o typing seja removido
    //mas se eu digitar e tiver um valor, eu quero que meu typing seja colocado
    var getInput = document.getElementById('senha')
    var getInputValue = document.getElementById('senha').value
    document.getElementById('textSenha').classList.add('typing-span')
    getInput.classList.add('typing-input')

    if (getInputValue == "" || getInputValue.length == 0) {
        getInput.classList.remove('typing-input')
        document.getElementById('textSenha').classList.remove('typing-span')
    }
}
 */
const getElement = document.querySelectorAll('.data')

getElement.forEach(item => item.addEventListener('keyup', function () {

    
    //adicionando a classe no input
    item.classList.add('typing-input')
    //add a classe no span
    item.previousElementSibling.classList.add('typing-span')
    
    
    const itemIputValue = item.value
    if (itemIputValue == "" || itemIputValue.length == 0) {
        item.classList.remove('typing-input')
        item.previousElementSibling.classList.remove('typing-span')
    }
}))

