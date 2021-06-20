
//* Lógica para liberar button após regra de negócio ser satisfeita */
const input = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')

function validarCampo() { 
    const inputValue = input.value
    const senhaValue = document.querySelector('#senha')

    if(inputValue.length > 0 && senhaValue.value.length > 7) {

        const button = document.querySelector('.login-button')
        button.removeAttribute('disabled')
    }
    
    else {
        const button = document.querySelector('.login-button')
        button.setAttribute('disabled', 'disabled')
    }
}

input.addEventListener('keyup', validarCampo)

inputSenha.addEventListener('keyup', validarCampo);