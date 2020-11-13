// calcula el total a pagar segun la limpieza
export function calcularLimpieza(limpieza) {
    let incremento;

    switch(limpieza) {
        case '----':
            incremento = 0;
            break;
        case 'basica':
            incremento = 600;
            break;
        case 'advance':
            incremento = 1200;
            break;
        case 'prog':
            incremento = 1800;
            break
        default:
            break;
    }

    return incremento;
}

// Calcula si instala el SO

export function calcularSO(so) {
    let incremento;

    switch(so) {
        case '----':
            incremento = 0;
            break;
        case 'menos':
            incremento = 1000;
            break;
        case 'mas':
            incremento = 1000;
            break;            
        default:
            break;
    }

    return incremento;
}


// Calcula si coloca Display

export function calcularDisplay(display) {
    let incremento;

    switch(display) {
        case '----':
            incremento = 0;
            break;
        case 'si':
            incremento = 1000;
            break;
        case 'no':
            incremento = 0;
            break;        
        default:
            break;
    }

    return incremento;
}



// Colacion  HDD
export function calcularDURO(disco) {
    let incremento;

    switch(disco) {
        case '----':
            incremento = 0;
            break;
        case '500GB':
            incremento = 1000;
            break;
        case '1TB':
            incremento = 2000;
            break
        case 'otros':
            incremento = 3000;
            break
            
        default:
            break;
    }

    return incremento;
}

// Colocacion  de SSD
export function calcularSATA(sata) {
    let incremento;

    switch(sata) {
        case '----':
            incremento = 0;
            break;
        case '120GB':
            incremento = 1200;
            break;
        case '240GB':
            incremento = 2400;
            break
        case 'otros':
            incremento = 3600;
            break
            
        default:
            break;
    }

    return incremento;
}


// ampliacion de RAM
export function calcularRAM(ram) {
    let incremento;

    switch(ram) {
        case '----':
            incremento = 0;
            break;
        case '4GB':
            incremento = 500;
            break;
        case '8GB':
            incremento = 1000;
            break
        case 'otros':
            incremento = 2000;
            break
            
        default:
            break;
    }

    return incremento;
}









// Muestra la primer letra mayuscula
export function primerMayuscula( texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}