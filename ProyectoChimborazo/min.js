document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // MENÚ HAMBURGUESA
    // =========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('activo');
        });
    }

    // =========================================
    // SISTEMA DE TRADUCCIÓN (DICCIONARIO COMPLETO)
    // =========================================
    const traducciones = {
        es: {
            // ---------------- GLOBALES ----------------
            inicio: "Inicio",
            lodge: "Lodge",
            travel: "Travel",
            restaurantes: "Restaurantes",
            footer_title: "Contacto y Ubicación",
            footer_email: "<strong>Correo electrónico:</strong> gustavocc1982@hotmail.com",
            footer_loc: "<strong>Ubicación:</strong> Vía Guaranda-Ambato, Prov. Bolívar (Sector Cruz del Arenal a las faldas del nevado Chimborazo).",

            // ---------------- INDEX.HTML ----------------
            hero_loc: "— GUARANDA, PROVINCIA BOLÍVAR, ECUADOR",
            hero_l1: "EXPEDICIÓN",
            hero_l2: "CUMBRE CHIMBORAZO",
            hero_eslogan: "Toca el punto más cercano al sol.",
            hero_bajada: "Doce horas entre la roca, el arenal y el glaciar para pisar el lugar de la Tierra que más se aleja de su centro. No es la montaña más alta del mundo: es la cumbre que está <strong>más cerca del sol que ninguna otra</strong>. Y sale desde nuestra puerta.",
            exp_title: "EXPERIENCIAS <strong>CHIMBORAZO REY</strong>",
            lodge_hotel: "LODGE HOTEL",
            lodge_desc: "Descansa frente al volcán más imponente del Ecuador.",
            lodge_link: "EXPLORAR ALOJAMIENTO &rarr;",
            travel_explore: "TRAVEL EXPLORE",
            travel_desc: "Vive rutas, nieve y experiencias inolvidables.",
            travel_link: "DESCUBRIR AVENTURAS &rarr;",
            rest_aventura: "RESTAURANTE DE AVENTURA",
            rest_desc: "Sabores andinos en un ambiente auténtico.",
            rest_link: "VER RESTAURANTE &rarr;",

            // ---------------- TRAVEL.HTML ----------------
            travel_title: "NUESTRAS EXPEDICIONES Y TOURS",
            tour1_title: "Cumbre Volcán Chimborazo",
            tour1_loc: "Reserva de Producción de Fauna Chimborazo",
            rating_fantastic: "Fantástico",
            t1_reviews: "238 comentarios",
            t1_h1: "- Vista panorámica del Chimborazo y sus arenales",
            level_high: "- Nivel físico alto - técnico",
            t1_h3: "- Páramo andino con flora y fauna endémica",
            
            tour2_title: "Descenso en bicicleta del Chimborazo",
            tour2_loc: "Ruta del Hielo - Arenales",
            rating_excellent: "Excelente",
            t2_reviews: "156 comentarios",
            t2_h1: "Aventura extrema sobre ruedas de 4800m a 3200m",
            level_mid: "Nivel físico medio",
            t2_h3: "Vistas espectaculares de los volcanes aledaños",
            
            tour3_title: "Cumbre Central Volcán Carihuairazo",
            tour3_loc: "Provincia de Tungurahua",
            rating_verygood: "Muy Bueno",
            t3_reviews: "98 comentarios",
            t3_h1: "Aclimatación ideal y escalada en glaciar (5018 msnm)",
            level_midhigh: "Nivel físico medio - alto",
            t3_h3: "Caminata sobre nieve y cruce de grietas",
            
            inc_transport: "Transporte",
            inc_guides: "Guías ASEGUIM",
            inc_lodging: "Refugio",
            inc_food: "Alimentación",
            inc_bikes: "Bicicletas de montaña",
            inc_safety: "Equipo de seguridad",
            inc_boxlunch: "Box Lunch",
            inc_equipment: "Equipo técnico",
            price_label: "Precio por persona",
            btn_consult: "Consultar el tour",
            
            m1_title: "ITINERARIO: CUMBRE CHIMBORAZO",
            m1_body: "<p><strong>Día 1:</strong></p><ul><li><strong>15:00</strong> Encuentro en El Arenal y traslado al lodge Chimborazo Rey (4.250 m).</li><li><strong>17:00</strong> Prueba de equipo y charla técnica de seguridad.</li><li><strong>18:30</strong> Cena caliente y descanso obligatorio.</li><li><strong>23:00</strong> Inicio de caminata nocturna con linternas frontales.</li></ul><p style='margin-top: 15px;'><strong>Día 2:</strong></p><ul><li><strong>06:30</strong> Cumbre Veintimilla (6.230 m) al amanecer.</li><li><strong>07:10</strong> Cumbre máxima Whymper (6.268 m).</li><li><strong>14:00</strong> Entrega de certificado y traslado de retorno.</li></ul>",
            m2_title: "ITINERARIO: DESCENSO EN BICI",
            m2_body: "<p><strong>Día único:</strong></p><ul><li><strong>08:00</strong> Encuentro en el Lodge y entrega de equipo de seguridad.</li><li><strong>08:30</strong> Ascenso en vehículo 4x4 hasta el primer refugio (4.800 m).</li><li><strong>09:30</strong> Charla técnica y prueba de bicicletas.</li><li><strong>10:00</strong> Inicio del descenso extremo por los arenales.</li><li><strong>12:30</strong> Paradas fotográficas y Box Lunch en ruta.</li><li><strong>14:00</strong> Llegada al punto final (3.200 m) y retorno al Lodge.</li></ul>",
            m3_title: "ITINERARIO: CUMBRE CARIHUAIRAZO",
            m3_body: "<p><strong>Día único:</strong></p><ul><li><strong>04:00</strong> Desayuno en el Lodge y salida en 4x4 hacia la base.</li><li><strong>05:30</strong> Inicio de la aproximación por el páramo andino.</li><li><strong>08:00</strong> Llegada al borde del glaciar, equipamiento.</li><li><strong>10:30</strong> Cumbre Central (5.018 m) y tiempo para fotografías.</li><li><strong>11:30</strong> Descenso cuidadoso hacia la base.</li><li><strong>14:30</strong> Retorno al vehículo y traslado al Lodge para almorzar.</li></ul>",
            btn_whatsapp: "Reservar ahora por WhatsApp",

            // ---------------- RESTAURANTES.HTML ----------------
            rest_page_title: "Una Comida Sobre las Alturas"
        },
        en: {
            // ---------------- GLOBALES ----------------
            inicio: "Home",
            lodge: "Lodge",
            travel: "Travel",
            restaurantes: "Restaurants",
            footer_title: "Contact and Location",
            footer_email: "<strong>Email:</strong> gustavocc1982@hotmail.com",
            footer_loc: "<strong>Location:</strong> Guaranda-Ambato Highway, Bolivar Prov. (Cruz del Arenal Sector at the foothills of the Chimborazo volcano).",

            // ---------------- INDEX.HTML ----------------
            hero_loc: "— GUARANDA, BOLIVAR PROVINCE, ECUADOR",
            hero_l1: "EXPEDITION",
            hero_l2: "CHIMBORAZO SUMMIT",
            hero_eslogan: "Touch the closest point to the sun.",
            hero_bajada: "Twelve hours between rock, sand, and glacier to step on the place on Earth furthest from its center. It is not the highest mountain in the world: it is the summit that is <strong>closer to the sun than any other</strong>. And it starts right at our door.",
            exp_title: "<strong>CHIMBORAZO REY</strong> EXPERIENCES",
            lodge_hotel: "LODGE HOTEL",
            lodge_desc: "Rest facing the most imposing volcano in Ecuador.",
            lodge_link: "EXPLORE LODGING &rarr;",
            travel_explore: "TRAVEL EXPLORE",
            travel_desc: "Experience routes, snow, and unforgettable moments.",
            travel_link: "DISCOVER ADVENTURES &rarr;",
            rest_aventura: "ADVENTURE RESTAURANT",
            rest_desc: "Andean flavors in an authentic atmosphere.",
            rest_link: "VIEW RESTAURANT &rarr;",

            // ---------------- TRAVEL.HTML ----------------
            travel_title: "OUR EXPEDITIONS AND TOURS",
            tour1_title: "Chimborazo Volcano Summit",
            tour1_loc: "Chimborazo Fauna Production Reserve",
            rating_fantastic: "Fantastic",
            t1_reviews: "238 reviews",
            t1_h1: "- Panoramic view of Chimborazo and its sandy areas",
            level_high: "- High physical level - technical",
            t1_h3: "- Andean paramo with endemic flora and fauna",
            
            tour2_title: "Chimborazo Mountain Bike Descent",
            tour2_loc: "Ice Route - Arenales",
            rating_excellent: "Excellent",
            t2_reviews: "156 reviews",
            t2_h1: "Extreme adventure on wheels from 4800m to 3200m",
            level_mid: "Medium physical level",
            t2_h3: "Spectacular views of surrounding volcanoes",
            
            tour3_title: "Carihuairazo Volcano Central Summit",
            tour3_loc: "Tungurahua Province",
            rating_verygood: "Very Good",
            t3_reviews: "98 reviews",
            t3_h1: "Ideal acclimatization and glacier climbing (5018 masl)",
            level_midhigh: "Medium - high physical level",
            t3_h3: "Snow walking and crevasse crossing",
            
            inc_transport: "Transport",
            inc_guides: "ASEGUIM Guides",
            inc_lodging: "Refuge",
            inc_food: "Meals",
            inc_bikes: "Mountain Bikes",
            inc_safety: "Safety Gear",
            inc_boxlunch: "Box Lunch",
            inc_equipment: "Technical Gear",
            price_label: "Price per person",
            btn_consult: "Consult tour",
            
            m1_title: "ITINERARY: CHIMBORAZO SUMMIT",
            m1_body: "<p><strong>Day 1:</strong></p><ul><li><strong>15:00</strong> Meeting at El Arenal and transfer to Chimborazo Rey lodge (4,250 m).</li><li><strong>17:00</strong> Gear check and technical safety briefing.</li><li><strong>18:30</strong> Hot dinner and mandatory rest.</li><li><strong>23:00</strong> Start of night hike with headlamps.</li></ul><p style='margin-top: 15px;'><strong>Day 2:</strong></p><ul><li><strong>06:30</strong> Veintimilla Summit (6,230 m) at sunrise.</li><li><strong>07:10</strong> Whymper Main Summit (6,268 m).</li><li><strong>14:00</strong> Certificate delivery and return transfer.</li></ul>",
            m2_title: "ITINERARY: BIKE DESCENT",
            m2_body: "<p><strong>Single Day:</strong></p><ul><li><strong>08:00</strong> Meeting at the Lodge and safety gear delivery.</li><li><strong>08:30</strong> 4x4 vehicle ascent to the first refuge (4,800 m).</li><li><strong>09:30</strong> Technical briefing and bike testing.</li><li><strong>10:00</strong> Start of the extreme descent through the sandy areas.</li><li><strong>12:30</strong> Photo stops and Box Lunch on the route.</li><li><strong>14:00</strong> Arrival at the final point (3,200 m) and return to the Lodge.</li></ul>",
            m3_title: "ITINERARY: CARIHUAIRAZO SUMMIT",
            m3_body: "<p><strong>Single Day:</strong></p><ul><li><strong>04:00</strong> Breakfast at the Lodge and 4x4 departure to the base.</li><li><strong>05:30</strong> Start of the approach through the Andean paramo.</li><li><strong>08:00</strong> Arrival at the glacier edge, crampon and ice axe equipping.</li><li><strong>10:30</strong> Central Summit (5,018 m) and time for photos.</li><li><strong>11:30</strong> Careful descent to the base.</li><li><strong>14:30</strong> Return to the vehicle and transfer to the Lodge for lunch.</li></ul>",
            btn_whatsapp: "Book now via WhatsApp",

            // ---------------- RESTAURANTES.HTML ----------------
            rest_page_title: "A Meal Above the Clouds"
        }
    };

    let idiomaActual = 'es'; 
    const elementosTraducibles = document.querySelectorAll('[data-i18n]');
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Función de traducir
    function cambiarIdioma(idioma) {
        elementosTraducibles.forEach(elemento => {
            const clave = elemento.getAttribute('data-i18n');
            
            if (traducciones[idioma][clave]) {
                if (elemento.tagName === 'INPUT' && elemento.hasAttribute('placeholder')) {
                    elemento.placeholder = traducciones[idioma][clave];
                } else {
                    elemento.innerHTML = traducciones[idioma][clave];
                }
            }
        });
    }

    if (btnEs && btnEn) {
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
    }

    // =========================================
    // LÓGICA DE MÚLTIPLES POP-UPS (MODALES)
    // =========================================
    const botonesConsultar = document.querySelectorAll('.btn-consultar[data-modal]');
    const botonesCerrar = document.querySelectorAll('.close-btn');

    botonesConsultar.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            if (boton.getAttribute('href') === '#') {
                evento.preventDefault(); 
            }
            const modalId = boton.getAttribute('data-modal');
            const modalDestino = document.getElementById(modalId);
            if (modalDestino) {
                modalDestino.classList.add('mostrar');
            }
        });
    });

    botonesCerrar.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalPadre = this.closest('.modal');
            if (modalPadre) {
                modalPadre.classList.remove('mostrar');
            }
        });
    });

    window.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('modal')) {
            evento.target.classList.remove('mostrar');
        }
    });
    
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            const modalAbierto = document.querySelector('.modal.mostrar');
            if (modalAbierto) {
                modalAbierto.classList.remove('mostrar');
            }
        }
    });
});