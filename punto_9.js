const CryptoJS = require("crypto-js");

function calcularHashMD5(str) {
  return CryptoJS.MD5(str).toString();
}

const hashObjetivo = "49f68a5c8493ec2c0bf489821c21fc3b";

const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function encontrarPassword() {
  for (let char1 of caracteres) {
    for (let char2 of caracteres) {
      let password = char1 + char2;
      let hashCalculado = calcularHashMD5(password);
      
      if (hashCalculado === hashObjetivo) {
        return password;
      }
    }
  }
  
  return null; 
}

const passwordEncontrado = encontrarPassword();
if (passwordEncontrado) {
  console.log(`El password de 2 caracteres con hash MD5 ${hashObjetivo} es: ${passwordEncontrado}`);
} else {
  console.log("No se encontró ningún password de 2 caracteres con ese hash MD5.");
}
