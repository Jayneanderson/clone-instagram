
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


/* 
    O input do e-mail só será desbloqueado se o input de senha
    tiver no mínimo 8 caracteres
*/

const input = document.querySelector('#email')

function validarCampo() { 
    const inputValue = input.value

    if(inputValue.length > 0) {

        const button = document.querySelector('.login-button')
        button.removeAttribute('disabled')
    }
    
    else {
        const button = document.querySelector('.login-button')
        button.setAttribute('disabled', 'disabled')
    }
}

input.addEventListener('keyup', validarCampo)

