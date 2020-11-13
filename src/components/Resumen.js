import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { primerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // extraer de datos
    const {limpieza, so, display, disco, sata, ram} = datos;

    if(limpieza === '' || so === '' || display === '' || disco === '' || sata === '' || ram === '') return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Limpieza: { primerMayuscula(limpieza) } </li>
                <li>Instalacion SO : {primerMayuscula(so)} </li>
                <li>Colocación Display: { primerMayuscula(display) } </li>
                <li>Colocación HDD: { primerMayuscula(disco) } </li>
                <li>Colocación SSD: { primerMayuscula(sata) } </li>
                <li>Ampliación RAM: { primerMayuscula(ram) } </li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;