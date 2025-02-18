AOS.init();

const dataAniversario = new Date('Nov 10, 2025 19:00:00');
const timeStampDoAniversario = dataAniversario.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horasEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horasEmMs) / minutosEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `<br> O Aniversário já passou`;
    }
}, 1000);
