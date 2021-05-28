
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
