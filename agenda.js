const readline = require('readline');
const { agregarContacto, obtenerContactos, buscarContactoSecuencial } = require('./contactos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n--- AGENDA DE CONTACTOS LINEAL ---");
    console.log("1. Agregar contacto");
    console.log("2. Listar registros");
    console.log("3. Buscar contacto paso a paso (Búsqueda Secuencial)");
    console.log("4. Salir");
    
    rl.question("Seleccione una opción (1-4): ", (opcion) => {
        manejarOpcion(opcion.trim());
    });
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            console.log("\n--- AGREGAR CONTACTO ---");
            rl.question("Ingrese el nombre del contacto: ", (nombre) => {
                rl.question("Ingrese el número de teléfono: ", (telefono) => {
                    const exito = agregarContacto(nombre, telefono);
                    if (exito) {
                        console.log(`¡Contacto agregado exitosamente!`);
                    } else {
                        console.log("Error: El nombre y el teléfono no pueden estar vacíos.");
                    }
                    mostrarMenu();
                });
            });
            break;

        case '2':
            console.log("\n--- LISTA DE REGISTROS ---");
            const lista = obtenerContactos();
            if (lista.length === 0) {
                console.log("No hay contactos guardados hasta el momento.");
            } else {
                console.log("-".repeat(40));
                console.log(`${"No.".padEnd(5)} | ${"NOMBRE".padEnd(20)} | ${"TELÉFONO".padEnd(10)}`);
                console.log("-".repeat(40));
                lista.forEach((c, index) => {
                    console.log(`${String(index + 1).padEnd(5)} | ${c.nombre.padEnd(20)} | ${c.telefono.padEnd(10)}`);
                });
                console.log("-".repeat(40));
            }
            mostrarMenu();
            break;

        case '3':
            console.log("\n--- BUSCAR CONTACTO PASO A PASO ---");
            const listaBusqueda = obtenerContactos();
            if (listaBusqueda.length === 0) {
                console.log("La agenda está vacía. No hay contactos que buscar.");
                mostrarMenu();
            } else {
                rl.question("Ingrese el nombre a buscar: ", (nombreBuscar) => {
                    const resultado = buscarContactoSecuencial(nombreBuscar);

                    console.log("\nIniciando recorrido secuencial elemento por elemento...");
                    if (resultado.encontrado) {
                        console.log(`¡Contacto encontrado en la posición ${resultado.posicion}!`);
                        console.log(`Nombre: ${resultado.contacto.nombre} | Teléfono: ${resultado.contacto.telefono}`);
                    }

                    console.log(`\nNúmero exacto de iteraciones/comparaciones realizadas: ${resultado.iteraciones}`);

                    if (!resultado.encontrado) {
                        console.log(`El contacto '${nombreBuscar.trim()}' no existe en la agenda.`);
                    }

                    mostrarMenu();
                });
            }
            break;

        case '4':
            console.log("\nSaliendo de la agenda de contactos. ¡Hasta luego!");
            rl.close();
            break;

        default:
            console.log("Opción inválida. Por favor, seleccione un número entre 1 y 4.");
            mostrarMenu();
            break;
    }
}

// Iniciar programa
mostrarMenu();