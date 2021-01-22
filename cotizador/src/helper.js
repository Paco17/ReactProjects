export function obtenerDifYear(year){
    return new Date().getFullYear() - year;
}

export function obtenerPrecioMarca(marca){
    let porcentaje;
    switch(marca){
        
        case 'Mercedes' || 'BMW' || 'Ferrari':
            porcentaje = 40;
            break;
        
        case 'Ford' || 'Toyota':
            porcentaje = 25;
            break;
        
        default:
            porcentaje = 10;
            break;
    }

    return porcentaje;   
}

export function nuevo_Semi(nuevo){
    let porcentaje;
    if(nuevo === 'Nuevo'){
        porcentaje = 30;
    }else{
        porcentaje = 15;
    }
    return porcentaje;
}

export function aseguradoFunction(asegurado){
    let porcentaje = 0;
    if(asegurado === 'Si'){
        porcentaje = 30;
    }

    return porcentaje;
}