
const contactos = [];
function agregarContacto(nombre, telefono) {
    const nombreTrim = nombre.trim();
    const telefonoTrim = telefono.trim();

    if (!nombreTrim || !telefonoTrim) {
        return false;
    }
contactos.push({nombre: nombreTrim, Telefono: telefonoTrim});
return true;
}

   function obtenerContactos() {
        return contactos;
}


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