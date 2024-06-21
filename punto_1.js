// Elaborar una pequeña función en javascript que recibiendo un array con
// nombres devuelva otro array con otro array de la misma longitud y cuyos
// elementos sean la longitud de cada nombre en el mismo orden. Ejemplo:
// ['Carlos', 'Pedro', 'Elisenda'] → [6,5,8]

// Nota: El código debe ejecutarse mediante la siguiente llamada:

// longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda'])


const longitudCadenasArray =(arr)=>{
    var result = []
    arr.map(element =>{
        result.push(element.length)
    })
    console.log(result)
}

longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda'])