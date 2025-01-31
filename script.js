document.addEventListener("DOMContentLoaded", function () {
    const cancion = document.getElementById("cancion");
    const btnNo = document.getElementById("btn-no");
    const btnSi = document.getElementById("btn-si");
    const lyricsDiv = document.getElementById("lyrics");

    // Reproducir música solo si el usuario lo permite
    if (localStorage.getItem("musica") === "play") {
        cancion.play();
    } else {
        document.body.addEventListener("click", () => {
            cancion.play();
            localStorage.setItem("musica", "play");
        }, { once: true });
    }

    // Obtener posición inicial del botón "No"
    const initialX = btnNo.offsetLeft;
    const initialY = btnNo.offsetTop;
    const maxMove = 100; // Máximo movimiento permitido

    btnNo.addEventListener("mouseover", function () {
        let x = initialX + (Math.random() * (maxMove * 2) - maxMove);
        let y = initialY + (Math.random() * (maxMove * 2) - maxMove);

        this.style.position = "absolute";
        this.style.left = `${x}px`;
        this.style.top = `${y}px`;
    });

    // Evento cuando se presiona "Sí"
    let clickCount = 0;

    btnSi.addEventListener("click", function () {
        clickCount++;

        // Aumentar el tamaño del botón
        let currentSize = parseFloat(window.getComputedStyle(this).fontSize);
        this.style.fontSize = (currentSize * 1.5) + "px";
        this.style.padding = "15px";

        // Crear corazones flotantes
        for (let i = 0; i < 10; i++) {
            createHeart();
        }

        // Si se ha hecho clic 3 veces, convertir el botón en un corazón
        if (clickCount === 3) {
            this.classList.add("heart-shape");
            this.innerHTML = "❤️";
            this.style.fontSize = "50px"; // Ajustar tamaño
            this.style.padding = "20px"; // Ajustar espacio
        }

        // Si se ha hecho clic 3 veces, ocultar el div.container
        if (clickCount === 3) {
            document.querySelector(".container").classList.add("fade-out");
            setTimeout(() => {
                document.querySelector(".container").remove();
            }, 600);
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.fontSize = Math.random() * 30 + 10 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    // Sincronizar letras de la canción
    const lyricsData = [
        { time: 18, text: "And we'll go, go, go, go, go" },
        { time: 22, text: "If you're ready, like I'm ready" },
        { time: 25, text: "Cause it's a beautiful night, we're looking for something dumb to do" },
        { time: 32, text: "Hey, baby, I think I wanna marry you" },
        { time: 39, text: "Is it the look in your eyes, or is it this dancing juice?" },
        { time: 45, text: "Who cares, baby? I think I wanna marry you, oh" },
        { time: 52, text: "I'll go get a ring, let the choir bells sing like, ooh" },
        { time: 58, text: "So what ya wanna do? Let's just run, girl" },
        { time: 65, text: "If we wake up and you wanna break up, that's cool" },
        { time: 71, text: "No, I won't blame you, it was fun, girl" },

        { time: 78, text: "Don't say no, no, no, no, no" },
        { time: 82, text: "Just say yeah, yeah, yeah, yeah, yeah" },
        { time: 84, text: "And we'll go, go, go, go, go" },
        { time: 88, text: "If you're ready, like I'm ready" },

        { time: 91, text: "Cause it's a beautiful night, we're looking for something dumb to do" },
        { time: 98, text: "Hey, baby, I think I wanna marry you" },
        { time: 104, text: "Is it the look in your eyes, or is it this dancing juice?" },
        { time: 112, text: "Who cares, baby? I think I wanna marry you" },

        { time: 117, text: "Just say, I do" },
        { time: 124, text: "Tell me right now, baby" },
        { time: 128, text: "Tell me right now, baby, baby" },

        { time: 132, text: "Just say, I do" },
        { time: 137, text: "Tell me right now, baby" },
        { time: 141, text: "Tell me right now, baby, baby" },
        
        { time: 145, text: "It's a beautiful night, we're looking for something dumb to do" },
        { time: 151, text: "Hey, baby, I think I wanna marry you" },
        { time: 158, text: "Is it the look in your eyes, or is it this dancing juice?" },
        { time: 164, text: "Who cares, baby? I think I wanna marry you" },
        
    ];

    

    let currentIndex = 0;
    cancion.addEventListener("timeupdate", () => {
        if (currentIndex < lyricsData.length && cancion.currentTime >= lyricsData[currentIndex].time) {
            lyricsDiv.textContent = lyricsData[currentIndex].text;
            currentIndex++;
        }
    });
});
