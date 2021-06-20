/* Função para mudar as imagens */
function image1() {
    document.querySelector('.phone-img').src = 'img/pictures/1.jpg'
    setTimeout('image2()', 4000)
}

function image2() {
    document.querySelector('.phone-img').src = 'img/pictures/2.jpg'
    setTimeout('image3()', 4000)
}

function image3() {
    document.querySelector('.phone-img').src = 'img/pictures/3.jpg'
    setTimeout('image4()', 4000)
}

function image4() {
    document.querySelector('.phone-img').src = 'img/pictures/4.jpg'
    setTimeout('image1()', 4000)
}

image1()


/* Lógica para colocar texto para cima ao digitar no input */
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
