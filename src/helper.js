// calcula el total a pagar segun la limpieza
export function calcularLimpieza(limpieza) {
    let incremento;

    switch(limpieza) {
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
export function obtenerSO(so) {
    return (so === 'si') ? 1800 : 0;
}

// Calcula si coloca Display
export function obtenerDisplay(display) {
    return (display === 'si') ? 1200 : 0;
}

// Calcula si coloca SSD
export function obtenerSSD(ssd) {
    return (ssd === 'si') ? 300 : 0;
}

// Calcula si coloca RAM
export function obtenerRAM(ram) {
    return (ram === 'si') ? 300 : 0;
}

// Calcula si coloca HDD
export function obtenerHDD(hdd) {
    return (hdd === 'si') ? 300 : 0;
}

// Calculo de backup de datos
export function obtenerBackup(backup) {
    return (backup === 'si') ? 0 : 300;
}

// precio de HDD
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

// precio de SSD
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

// precio de SSD m2
export function calcularM2(m2) {
    let incremento;

    switch(m2) {
        case '----':
            incremento = 0;
            break;
        case '128GB':
            incremento = 2000;
            break;
        case '256GB':
            incremento = 4000;
            break
        case 'otros':
            incremento = 6000;
            break
            
        default:
            break;
    }

    return incremento;
}

// precio de SSD m2 pcie
export function calcularM2PCIE(pcie) {
    let incremento;

    switch(pcie) {
        case '----':
            incremento = 0;
            break;
        case '128GB':
            incremento = 2500;
            break;
        case '256GB':
            incremento = 5000;
            break
        case 'otros':
            incremento = 7500;
            break
            
        default:
            break;
    }

    return incremento;
}

// precio de RAM SODDIM 3
export function calcularRAM3(ram3) {
    let incremento;

    switch(ram3) {
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

// precio de RAM SODDIM 3
export function calcularRAM4(ram4) {
    let incremento;

    switch(ram4) {
        case '----':
            incremento = 0;
            break;
        case '4GB':
            incremento = 600;
            break;
        case '8GB':
            incremento = 1200;
            break
        case 'otros':
            incremento = 2400;
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