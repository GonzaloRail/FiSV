const cancion = document.getElementById("cancion");
    
// Verifica si la música debe seguir sonando
if (localStorage.getItem("musica") === "play") {
    cancion.play();
}

document.addEventListener("DOMContentLoaded", function () {
const btnNo = document.getElementById("btn-no");

// Obtener posición inicial del botón
const initialX = btnNo.offsetLeft;
const initialY = btnNo.offsetTop;

btnNo.addEventListener("mouseover", function () {
// Definir el rango de movimiento máximo (200px)
const maxMove = 100;

// Calcular nuevas coordenadas dentro del rango permitido
let x = initialX + (Math.random() * (maxMove * 2) - maxMove);
let y = initialY + (Math.random() * (maxMove * 2) - maxMove);

this.style.position = "absolute";
this.style.left = `${x}px`;
this.style.top = `${y}px`;
});
});

document.getElementById("btn-si").addEventListener("click", function() {
    // Animación del botón
    this.classList.add("animate");
    setTimeout(() => {
        this.classList.remove("animate");
    }, 800);

    // Crear corazones animados
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    
    // Posición aleatoria en la pantalla
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Tamaño aleatorio
    heart.style.fontSize = Math.random() * 30 + 10 + "px";

    document.body.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

let clickCount = 0;
let sizeFactor = 1.5; // Factor de aumento del botón

document.getElementById("btn-si").addEventListener("click", function() {
    clickCount++; // Contador de clics

    // Aumentar el tamaño del botón con cada clic
    let currentSize = parseFloat(window.getComputedStyle(this).fontSize);
    this.style.fontSize = (currentSize * sizeFactor) + "px";
    this.style.padding = (parseFloat(this.style.padding || "10px") * 1.2) + "px";

    // Convertir el botón en un corazón si alcanza cierto tamaño
    if (currentSize >= 40) {
        this.classList.add("heart-shape");
        this.innerHTML = ""; // Eliminar el texto del botón
    }

    // Crear corazones flotantes
    for (let i = 0; i < 10; i++) {
        createHeart();
    }

    // Si se ha hecho clic 3 veces, ocultar el div.container
    if (clickCount === 3) {
        document.querySelector(".container").classList.add("fade-out");

        // Opcional: eliminar el div después de la animación
        setTimeout(() => {
            document.querySelector(".container").remove();
        }, 600); // Tiempo de la animación
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    
    // Posición aleatoria
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Tamaño aleatorio
    heart.style.fontSize = Math.random() * 30 + 10 + "px";

    document.body.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 2000);
}




const lyricsData = [
    { time: 17, text: "And we'll go, go, go, go, go" },
    { time: 22, text: "If you're ready, like I'm ready" },
    { time: 25, text: "Cause it's a beautiful night, we're looking for something dumb to do" },
    { time: 32, text: "Hey, baby, I think I wanna marry you" },
    { time: 39, text: "Is it the look in your eyes, or is it this dancing juice?" },
    { time: 45, text: "Who cares, baby? I think I wanna marry you, oh" },
    { time: 52, text: "I'll go get a ring, let the choir bells sing like, ooh" },
    { time: 58, text: "So what ya wanna do? Let's just run, girl" },
    { time: 65, text: "If we wake up and you wanna break up, that's cool" },
    { time: 71, text: "No, I won't blame you, it was fun, girl" },
];

const audio = document.getElementById("cancion");
const lyricsDiv = document.getElementById("lyrics");

let currentIndex = 0;
const offset = 0.5; // Margen de error para evitar que salte líneas

audio.addEventListener("timeupdate", () => {
    let currentTime = audio.currentTime;

    // Verificar si hay una nueva línea para mostrar
    if (currentIndex < lyricsData.length && currentTime >= lyricsData[currentIndex].time) {
        lyricsDiv.style.opacity = 0; // Efecto de desvanecimiento

        setTimeout(() => {
            lyricsDiv.textContent = lyricsData[currentIndex].text;
            lyricsDiv.style.opacity = 1; // Mostrar nuevo texto con efecto
            currentIndex++;
        }, 500); // Esperar 0.5 segundos antes de cambiar
    }
});

// Evento cuando se presiona "Sí"
//document.getElementById("btn-si").addEventListener("click", function () {
    //alert("¡Sabía que dirías que sí! ❤️😍");
//});