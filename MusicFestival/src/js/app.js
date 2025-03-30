document.addEventListener('DOMContentLoaded', function () {
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
    const cantidadImagenes = 16
    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'

        //event handler
        imagen.onclick = function () {
            mostrarImagen(i)
        }
        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galeria'
   
    //generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    modal.appendChild(imagen)

    //agregar al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('cerrarModal')
    setTimeout(() => {
        modal?.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500)
}

function resaltarEnlace() {
    document.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual =''
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            
            if(window.scrollY >= (sectionTop - sectionHeight/3))
            {
                actual=section.id
            }
    })

    navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === '#' + actual) {
            link.classList.add('active')
        }
    })
})
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault()
            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}