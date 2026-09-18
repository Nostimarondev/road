// Configura la fecha objetivo aquí. 
// Ajustado para coordinar exactamente con el contador oficial (Oct 1, 2026 a las 8:30 PM EST).
const targetDate = new Date("October 2, 2026 00:30:00 UTC").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualización del DOM (formateado a 2 dígitos)
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Iniciar el intervalo de actualización
setInterval(updateCountdown, 1000);
updateCountdown();

// Función para copiar el contrato al portapapeles
const copyBtn = document.getElementById('copy-btn');

if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        const contractAddress = document.getElementById('contract-address').innerText;
        navigator.clipboard.writeText(contractAddress).then(() => {
            // Cambiar color del icono a verde para indicar éxito
            const icon = this.querySelector('svg');
            const originalFill = icon.style.fill;
            icon.style.fill = '#4caf50';

            setTimeout(() => {
                icon.style.fill = originalFill;
            }, 2000);
        });
    });
}
