
const contactos = [];
// Esta funcion sirva para agregar los nombres y los contactos a la agenda,
//  y tambien valida que no se ingresen valores vacios.
function agregarContacto(nombre, telefono) {
    const nombreTrim = nombre.trim();
    const telefonoTrim = telefono.trim();

    if (!nombreTrim || !telefonoTrim) {
        return false;
    }
contactos.push({nombre: nombreTrim, telefono: telefonoTrim});
return true;
}

   function obtenerContactos() {
        return contactos;
}

// Esta funcion sirve para buscar un contacto en la agenda,
//  y devuelve un objeto con la informacion del contacto encontrado,   
//  la cantidad de interacciones realizadas y la posicion del contacto en la lista.
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
// Esta funcion sirve para buscar un contacto 
module.exports = {
    agregarContacto,
    obtenerContactos,
    buscarContacto
};