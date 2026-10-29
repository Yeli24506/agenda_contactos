// Arreglo plano donde se almacenaran los contactos
const contactos = [];
/*
Agrega un nuevo contacto a la lista.
@param {string} nombre 
@param {string} telefono
@returns {boolean} true si se agrego con exito, false si hay campos vacios.
*/
function agregarContacto(nombre, telefono) {
    const nombreTrim = nombre.trim();
    const telefonoTrim = telefono.trim();

    if (!nombreTrim || !telefonoTrim) {
        return false;
    }
contactos.push({nombre: nombreTrim, Telefono: telefonoTrim});
return true;
}
/* 
    Retorna la lista actual de contactos.
*/
   function obtenerContactos() {
        return contactos;
}

/*
Busca un contacto de forma secuencial paso a paso.
@param {string} nombreBuscado
@returns {Object} Resultado con el estado, interacciones y datos del contacto encontrado.
*/
function buscarContacto(nombreBuscado) {
    const nombreBusqTrim = nombreBuscado.trim().toLowerCase();
    let interacciones = 0;
    let encontrado = false;
    let contactoEncontrado = null;
    let posicion = -1;
    
    for (let i = 0; i < contactos.length; i++) {
        interacciones++;
        if (contactos[i].nombre.toLowerCase() === nombreBusqTrim) {
            encontrado = true;
            contactoEncontrado = contactos[i];
            posicion = i + 1;
            break;
        }
    }
    return {
        encontrado,
        interacciones,
        contacto: contactoEncontrado,
        posicion
    };

}
module.exports = {
    agregarContacto,
    obtenerContactos,
    buscarContacto
};