const fs = require('fs');
const colors = require('colors');

                 //si la persona no me manda la basa va a ser 5 por defecto
const crearArchivo = async (base=5, listar = false, hasta = 10) => {

  try {
    
  let salida = "";
  let consola = '';  // mejora e archivo txt modif por los colores

  for (let i = 1; i <= hasta; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
    consola += `${base} ${'x'.blue} ${i} ${'='.red} ${base * i}\n`;
  }
  if (listar) {
    console.log("=====================".yellow);
    console.log("    Tabla del:".trap, colors.green(base));
    console.log("=====================".yellow);
    console.log(consola);
  }
  
  
  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //(err) => {
   //if(err) throw err;

   return `tabla-${base}.txt`;
 // })
  } catch (err){
    throw err;
  }
}

module.exports = {
  crearArchivo
}
