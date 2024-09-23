const btn = document.querySelector(".no");
let position = 0;

const moveButton = () => {
  position = position ? 0 : 150;
  btn.style.transform = `translate(${position}px, 0px)`;
  btn.style.transition = "all 0.2s ease";
};

// Adiciona os eventos de 'click' e 'touchstart'
btn.addEventListener("click", moveButton);
btn.addEventListener("touchstart", moveButton); // Para dispositivos móveis
btn.addEventListener("mouseover", moveButton); // Para desktops

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {
  let timerInterval;
  Swal.fire({
    title: 'Amém!',
    html: 'Fico feliz por isso !!!',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector('b');
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  });
});
