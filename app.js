// Menu lateral
let menu_visible = false;
const menu = document.getElementById("nav");
const navBarIcon = document.querySelector(".nav-bar");

function mostrarOcultarMenu() {
    menu_visible = !menu_visible;
    menu.style.display = menu_visible ? "block" : "none";
}

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        menu.style.display = "none";
        menu_visible = false;
    });
});

// Cierra el menú al hacer clic fuera
document.addEventListener("click", function (e) {
    const isClickInside = menu.contains(e.target) || navBarIcon.contains(e.target);
    if (!isClickInside && menu_visible) {
        menu.style.display = "none";
        menu_visible = false;
    }
});


function crearBarra(id_barra){
    for(i=0;i<=20;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let analysis = document.getElementById("analysis");
crearBarra(analysis);
let python = document.getElementById("python");
crearBarra(python);
let SQL = document.getElementById("SQL");
crearBarra(SQL);
let VB6 = document.getElementById("VB6");
crearBarra(VB6);
let Tableau = document.getElementById("Tableau");
crearBarra(Tableau);
let PowerBi = document.getElementById("PowerBi");
crearBarra(PowerBi);
let EstadisticaDescriptiva = document.getElementById("EstadisticaDescriptiva");
crearBarra(EstadisticaDescriptiva);
let dax = document.getElementById("dax");
crearBarra(dax);



//Gaurdo la cantidad de items que se van a ir pintando por cada barra
//comienzan en -1 porque no tiene ninguna pintada al iniciarse, los arrays arrancan en 0
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
//inicio variable bandera en falso para q se active en scroll
let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalAnalysis = setInterval(function(){
            pintarBarra(analysis, 19, 0, intervalAnalysis);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 16, 1, intervalPython);
        },100);
        const intervalSQL = setInterval(function(){
            pintarBarra(SQL, 19, 2, intervalSQL);
        },100);
        const intervalVB6 = setInterval(function(){
            pintarBarra(VB6, 18, 3, intervalVB6);
        },100);
        const intervalTableau = setInterval(function(){
            pintarBarra(Tableau, 17, 4, intervalTableau);
        },100);
        const intervalPowerBi = setInterval(function(){
            pintarBarra(PowerBi, 17, 5, intervalPowerBi);
        },100);
        const intervalEstadisticaDescriptiva = setInterval(function(){
            pintarBarra(EstadisticaDescriptiva, 17, 6, intervalEstadisticaDescriptiva);
        },100);
        const intervaldax = setInterval(function(){
            pintarBarra(dax, 17, 7, intervaldax);
        },100);
    }
}



//lleno una barra
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

//Efecto de imagenes de la seccion de proyectos - Show & Tell
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        }
      }
    });
  });

/* CAROUSEL DE CERTIF */
// Inicializo el carrusel de certificados
const swiperCertificados = new Swiper(".mySwiper-certificados", {
    slidesPerView: 20,
    spaceBetween: 30,
    loop: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-certificados",
      prevEl: ".swiper-button-prev-certificados",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      }
    },
    on: {
      slideChangeTransitionEnd: () => {
        lazyLoadVisibleIframes();
      }
    }
  });
  
  // Pausar / reanudar autoplay cuando el carrusel es visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        swiperCertificados.autoplay.start();  // Activa autoplay si es visible
      } else {
        swiperCertificados.autoplay.stop();   // Pausa autoplay si no se ve
      }
    });
  }, {
    threshold: 0.3, // Cuando el 30% del carrusel es visible, se activa
  });
  
  const certCarousel = document.querySelector('.mySwiper-certificados');
  if (certCarousel) {
    observer.observe(certCarousel);
  }
  
  // Carga solo los iframes visibles si querés más optimización (opcional)
  function lazyLoadVisibleIframes() {
    const slides = document.querySelectorAll('.mySwiper-certificados .swiper-slide');
    slides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      const isVisible = rect.left < window.innerWidth && rect.right > 0;
  
      if (isVisible) {
        const iframe = slide.querySelector('iframe');
        if (iframe && iframe.dataset.src && !iframe.src) {
          iframe.src = iframe.dataset.src;
        }
      }
    });
  }
  
  // Carga los iframes visibles al inicio (por si acaso)
  window.addEventListener("load", () => {
    setTimeout(() => {
      lazyLoadVisibleIframes();
    }, 300);
  });
 
