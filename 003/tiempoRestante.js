// Forma 1 

const dateBox = document.querySelector('.input__search');
const dateBtn = document.querySelector('.btn__search');


dateBtn.addEventListener("click",( ) =>{ 
  dateNew(dateBox.value);
})


function dateNew(date) {
  console.log(date);

  const fechaFinal = new Date(date);
  const hoy = new Date();


  const annosWeb = document.querySelector('.annos');
  const mesesWeb = document.querySelector('.meses');
  const diasWeb = document.querySelector('.dias');
  const horasWeb = document.querySelector('.horas');
  const minutosWeb =document.querySelector('.minutos ');
  const segundosWeb = document.querySelector('.segundos');

  const ms_anno = 1000 * 60 * 60 * 24 * 365;
  const ms_mes = 1000 * 60 * 60 * 24 * 30;
  const ms_dia = 1000 * 60 * 60 * 24;
  const ms_hora = 1000 * 60 * 60;
  const ms_minuto = 1000 * 60;
  const ms_segundo = 1000;

   if( fechaFinal < hoy ){ 
  
    resultado.innerText = `la fecha ya paso, intenta con otra fecha`;
   }else{   


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


    annosWeb.innerText = `${annos}`;
    mesesWeb.innerText = `${meses}`;
    diasWeb.innerText = `${dias}`;
    horasWeb.innerText= `${horas}`;
    minutosWeb.innerText = `${minutos}`;
    segundosWeb.innerText = `${segundos}`;
  }, 1000)

  }

}

