document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
    });

});

//creacion de diconario
document.addEventListener('DOMContentLoaded', () => {
    
    const traducciones = {
        es: {
            // Menú Superior
            inicio: "Inicio",
            lodge: "Lodge",
            travel: "Travel",
            restaurante: "Restaurante",
            
            // Título Principal
            titulo_aventura: "UNA AVENTURA SOBRE LAS NUBES",
            
            // Formulario
            label_destino: "Destino:",
            opt_destino_sel: "Selecciona un destino",
            label_fechas: "Fechas",
            ph_entrada: "Entrada",
            ph_salida: "Salida",
            label_personas: "Cuantas Personas Viajan?",
            opt_adultos_1: "Adultos: 1",
            opt_adultos_2: "Adultos: 2",
            opt_adultos_3: "Adultos: 3",
            opt_adultos_4: "Adultos: 4",
            opt_grupo: "Grupo grande",
            btn_buscar: "BUSCAR",

            // Tarjetas
            lodge_hotel: "Lodge Hotel",
            travel_explore: "Travel Explore",
            rest_aventura: "Restaurante de Aventura"
        },
        en: {
            // Menú Superior
            inicio: "Home",
            lodge: "Lodge",
            travel: "Travel",
            restaurante: "Restaurant",
            
            // Título Principal
            titulo_aventura: "AN ADVENTURE ABOVE THE CLOUDS",
            
            // Formulario
            label_destino: "Destination:",
            opt_destino_sel: "Select a destination",
            label_fechas: "Dates",
            ph_entrada: "Check-in",
            ph_salida: "Check-out",
            label_personas: "How many people travel?",
            opt_adultos_1: "Adults: 1",
            opt_adultos_2: "Adults: 2",
            opt_adultos_3: "Adults: 3",
            opt_adultos_4: "Adults: 4",
            opt_grupo: "Large group",
            btn_buscar: "SEARCH",

            // Tarjetas
            lodge_hotel: "Lodge Hotel",
            travel_explore: "Travel Explore",
            rest_aventura: "Adventure Restaurant"
        }
    };

    let idiomaActual = 'es'; 
    const elementosTraducibles = document.querySelectorAll('[data-i18n]');
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    //funcion de traducir
    function cambiarIdioma(idioma) {
        elementosTraducibles.forEach(elemento => {
            const clave = elemento.getAttribute('data-i18n');
            
            if (traducciones[idioma][clave]) {
                if (elemento.tagName === 'INPUT' && elemento.hasAttribute('placeholder')) {
                    elemento.placeholder = traducciones[idioma][clave];
                } else {
                    elemento.textContent = traducciones[idioma][clave];
                }
            }
        });
    }

    btnEs.addEventListener('click', () => {
        if (idiomaActual !== 'es') {
            idiomaActual = 'es';
            cambiarIdioma('es');
            
            btnEs.classList.add('activo');
            btnEn.classList.remove('activo');
        }
    });

    btnEn.addEventListener('click', () => {
        if (idiomaActual !== 'en') {
            idiomaActual = 'en';
            cambiarIdioma('en');
            
            btnEn.classList.add('activo');
            btnEs.classList.remove('activo');
        }
    });

});

// =========================================
// LÓGICA DE MÚLTIPLES POP-UPS (MODALES)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const botonesConsultar = document.querySelectorAll('.btn-consultar[data-modal]');
    const botonesCerrar = document.querySelectorAll('.close-btn');

    // 1. Abrir el modal correspondiente al hacer clic en el botón
    botonesConsultar.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            if (boton.getAttribute('href') === '#') {
                evento.preventDefault(); 
            }
            // Obtenemos el ID de la ventana que debemos abrir
            const modalId = boton.getAttribute('data-modal');
            const modalDestino = document.getElementById(modalId);
            
            // Si el modal existe, lo mostramos
            if (modalDestino) {
                modalDestino.classList.add('mostrar');
            }
        });
    });

    // 2. Cerrar el modal al hacer clic en la "X"
    botonesCerrar.forEach(btn => {
        btn.addEventListener('click', function() {
            // Buscamos la ventana padre de la X y la cerramos
            const modalPadre = this.closest('.modal');
            if (modalPadre) {
                modalPadre.classList.remove('mostrar');
            }
        });
    });

    // 3. Cerrar al hacer clic afuera (en la parte oscura)
    window.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('modal')) {
            evento.target.classList.remove('mostrar');
        }
    });
    
    // 4. Cerrar con la tecla "Escape"
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            const modalAbierto = document.querySelector('.modal.mostrar');
            if (modalAbierto) {
                modalAbierto.classList.remove('mostrar');
            }
        }
    });
});