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
    const {limpieza, so, display, ssd, ram, hdd, backup, disco, sata, m2, pcie, ram3, ram4} = datos;

    if(limpieza === '' || so === '' || display === '' || ssd === '' || ram === '' || hdd === '' || backup === '' || disco === '' || sata === '' || m2 === '' || pcie === '' || ram3 === '' || ram4 === '') return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Limpieza: { primerMayuscula(limpieza) } </li>
                <li>Instalacion SO: {primerMayuscula(so)} </li>
                <li>Colocación Display: { primerMayuscula(display) } </li>
                <li>Colocación SSD: { primerMayuscula(ssd) } </li>
                <li>Colocación RAM: { primerMayuscula(ram) } </li>
                <li>Colocación HDD: { primerMayuscula(hdd) } </li>
                <li>Backup: { primerMayuscula(backup) } </li>
                <li>HDD: { primerMayuscula(disco) } </li>
                <li>SSD SATA: { primerMayuscula(sata) } </li>
                <li>SSD M.2: { primerMayuscula(m2) } </li>
                <li>SSD M.2 pcie: { primerMayuscula(pcie) } </li>
                <li>RAM SODDIM3: { primerMayuscula(ram3) } </li>
                <li>RAM SODDIM4: { primerMayuscula(ram4) } </li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;