// Forma 1 

const fechaFinal = new Date('2028-09-26');
const resultado = document.getElementById('resultado');

const ms_anno = 1000 * 60 * 60 * 24 * 365;
const ms_mes = 1000 * 60 * 60 * 24 * 30;
const ms_dia = 1000 * 60 * 60 * 24;
const ms_hora = 1000 * 60 * 60;
const ms_minuto = 1000 * 60;
const ms_segundo = 1000;

setInterval(() => {
  const hoy = new Date();
  let resto;
  
  const diferenMilisegundos = Math.abs(fechaFinal - hoy);
  const annos = Math.floor(diferenMilisegundos / ms_anno);

  resto = diferenMilisegundos % ms_anno;
  const meses = Math.floor(resto / ms_mes);

  resto = diferenMilisegundos % ms_mes;
  const dias = Math.floor(resto / ms_dia);

  resto = diferenMilisegundos % ms_dia;
  const horas = Math.floor(resto / ms_hora);

  resto = diferenMilisegundos % ms_hora;
  const minutos = Math.floor(resto / ms_minuto);

  resto = diferenMilisegundos % ms_minuto;
  const segundos = Math.floor(resto / ms_segundo);

  resultado.innerText = `${annos} : ${meses} : ${dias} : ${horas} : ${minutos} : ${segundos}`;
}, 1000)

