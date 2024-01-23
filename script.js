const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
let degree = 0;

//Funcion para girar la rueda
function spinWheel() {
  degree = Math.floor(5000 + Math.random() * 5000); // gira entre 5000 y 10000 grados
  wheel.style.transition = "transform 10s ease-out";
  wheel.style.transform = `rotate(${degree}deg)`;
  //restablece para un nuevo giro
  setTimeout(() => {
    wheel.style.transition = "none";
    wheel.style.transform = `rotate(${degree % 360}deg)`;
  }, 10000);
}

spinButton.addEventListener("click", spinWheel);
