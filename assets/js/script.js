/*ejercicio 1*/
let img1 = document.querySelector('.imgmb');
let img2 = document.querySelector('.imgmb2');

function border1() {
    if (img1.style.border == '5px solid yellow') {
        img1.style.border = 'none';
    } else {
        img1.style.border = '5px solid yellow';
    }
}
function border2() {
    if (img2.style.border == '5px solid yellow') {
        img2.style.border = 'none';
    } else {
        img2.style.border = '5px solid yellow';
    }
}

/*funcion ejercicio 2*/
function seleccion() {
    let sticker1 = document.querySelector('#sticker1').value;
    let sticker2 = document.querySelector('#sticker2').value;
    let sticker3 = document.querySelector('#sticker3').value;
    let total = Number(sticker1) + Number(sticker2) + Number(sticker3);
    let faltantes = Number(10) - Number(total);

    if (total <= 9) {
        document.querySelector('#advertencia1').innerHTML = 'Haz seleccionado ' + total + ' stickers, te faltan ' + faltantes + ' stickers por seleccionar.'
    } else if (total == 10) {
        document.querySelector('#advertencia1').innerHTML = 'Muy bien!, haz seleccionado tus 10 sticker'
    } else {
        document.querySelector('#advertencia1').innerHTML = 'Haz seleccionado demaciados sticker!'
    }
}

/*funcion ejercicio 3*/
function password() {
    let numero1 = document.querySelector('#primero').value;
    let numero2 = document.querySelector('#segundo').value;
    let numero3 = document.querySelector('#tercero').value;
    let parrafo = document.querySelector('#advertencia2');

    if (numero1 === "9" && numero2 === "1" && numero3 === "1") {
        document.querySelector('#advertencia2').innerHTML = "Primera contraseña correcta";
        parrafo.style.color = 'green';

    } else if (numero1 === "7" && numero2 === "1" && numero3 === "4") {
        document.querySelector('#advertencia2').innerHTML = "Segunda contraseña correcta";
        parrafo.style.color = 'green';
    } else if (numero1 == "0" || numero2 == "0" || numero3 == "0") {
        document.querySelector('#advertencia2').innerHTML = "Por favor, ingrese una contraseña.";
        parrafo.style.color = 'black';
    }
    else {
        document.querySelector('#advertencia2').innerHTML = "Contraseña incorrecta, vuelva a intentar.";
        parrafo.style.color = 'red';
    }
}

