//haceCalor(temperatura)
//Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) o false de lo contrario

//haceCalor(12) // false
//haceCalor(22) // true
//haceCalor(32) // true

const haceCalor = (temperatura)=>{
    return (temperatura >= 22) === true
  }
  
console.log(haceCalor(12));
console.log(haceCalor(22));
console.log(haceCalor(32));
