// const timestamp = 1000;

// const fecha = new Date(timestamp * 1000);

// // Configurar la zona horaria a Moscú (GMT+3)
// fecha.setTime(fecha.getTime() + (3 * 60 * 60 * 1000));

// const dia = fecha.getDate();
// const mes = fecha.getMonth() + 1; 
// const anio = fecha.getFullYear();
// const hora = fecha.getHours();
// const minuto = fecha.getMinutes();
// const segundo = fecha.getSeconds();

// const fechaHora = `${dia}/${mes}/${anio} ${hora}:${minuto}:${segundo} (hora de Moscú)`;

// console.log(`La fecha y hora exactas para el timestamp ${timestamp} en Moscú son: ${fechaHora}`);

const moment = require('moment-timezone');

const timestamp = 1000;
const fecha = moment.unix(timestamp);

fecha.tz('Europe/Moscow');

const fechaHora = fecha.format('YYYY-MM-DD HH:mm:ss');

console.log(`La fecha y hora exactas para el timestamp ${timestamp} en Moscú son: ${fechaHora}`);

