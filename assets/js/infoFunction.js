import { carnivoro1, herviboro1, volador1, marinos1, reptiles1 } from './info.js'

let enlaces = document.querySelectorAll('a')
let nombreElemento = document.getElementById('nombre')
let pesotamañoElemento = document.getElementById('pesotamaño')
let alimentoElemento = document.getElementById('alimento')
let tipovidaElemento = document.getElementById('tipovida')

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        this.classList.add('active')
        let contenido = obtenerContenido(this.textContent)

        nombreElemento.innerHTML = contenido.nombre
        pesotamañoElemento.innerHTML = contenido.pesotamaño
        alimentoElemento.innerHTML = contenido.alimento
        tipovidaElemento.innerHTML = contenido.tipovida
    });
});

function obtenerContenido(enlace) {
    let contenido = {
        'Velociraptor': carnivoro1,
        'Roma': herviboro1,
        'París': volador1,
        'Londres': marinos1,
        'Reptiles': reptiles1
    };
    return contenido[enlace];
}