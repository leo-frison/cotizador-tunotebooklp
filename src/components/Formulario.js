import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { calcularLimpieza, calcularSO,  calcularSATA, calcularRAM, calcularDURO, calcularDisplay} from '../helper';


const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: black;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    const [ datos, guardarDatos ] = useState({
        limpieza: '----',
        so: '----',
        sata: '----',
        ram: '----',
        disco: '----',
        display: '----'

    });
    const [ error, guardarError ] = useState(false);

    // extraer los valores del state
    const { limpieza, so, sata, ram, disco, display } = datos;

    // Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault();

        if(limpieza.trim() === '' || so.trim() === ''  || sata.trim() === '' || ram.trim() === '' || disco.trim() === '' || display.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Una base de 0
        let resultado = 0;

        // Basica 600
        // Advance 1200
        // ProG 1800

        resultado = calcularLimpieza(limpieza) + resultado;

        // Instala so aumento 1800
        // No instala so no aumento ----
      
        resultado = calcularSO(so) + resultado;

        
        // Colocacion de ssd sata
        resultado = calcularSATA(sata) + resultado;


        // Ampliacion de la ram
        resultado = calcularRAM(ram) + resultado;
        
        
        // Colocacion de hdd sata
        resultado = calcularDURO(disco) + resultado;
        
        // Coloco display 
     
        resultado = calcularDisplay(display) + resultado;

        guardarCargando(true);

        setTimeout(() => {

            // Elimina el spinner
            guardarCargando(false);

            // pasa la información al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 3000);



    }

    return ( 
        <form
            onSubmit={cotizarSeguro}
        >

            <Campo>
                <Label>Limpieza de Notebook</Label>
                <Select
                    name="limpieza"
                    value={limpieza}
                    onChange={obtenerInformacion}
                >
                    <option value="----">-- Seleccione --</option>
                    <option value="basica">Basica a $600</option>
                    <option value="advance">Advance a $1200</option>
                    <option value="prog">ProG a $1800</option>
                </Select>
            </Campo>

 

            <Campo>
                <Label>Instalación Sistema Operativo</Label>
                <Select
                    name="so"
                    value={so}
                    onChange={obtenerInformacion}
                >
                    <option value="no">-- Seleccione --</option>
                    <option value="menos">Paquete Office + Backup inferior a 35GB a $1200</option>
                    <option value="mas">Backup de mas de 35GB se agrega a $1200 unos 100$ cada 5GB</option>
                </Select>
            </Campo>


            <Campo>
                <Label>Colocación Disco Solido</Label>
                <Select
                    name="sata"
                    value={sata}
                    onChange={obtenerInformacion}
                >
                    <option value="----">-- Seleccione --</option>
                    <option value="120GB">120GB</option>
                    <option value="240GB">240GB</option>
                    <option value="otros">500GB</option>
                </Select>
            </Campo>


            
            <Campo>
                <Label>Ampliación memoria RAM</Label>
                <Select
                    name="ram"
                    value={ram}
                    onChange={obtenerInformacion}
                >
                    <option value="----">-- Seleccione --</option>
                    <option value="4GB">4GB</option>
                    <option value="8GB">8GB</option>
                    <option value="otros">16GB</option>
                </Select>
            </Campo>


            <Campo>
                <Label>Colocación Disco Rigido</Label>
                <Select
                    name="disco"
                    value={disco}
                    onChange={obtenerInformacion}
                >
                    <option value="----">-- Seleccione --</option>
                    <option value="500GB">500GB</option>
                    <option value="1TB">1TB</option>
                    <option value="otros">otros</option>
                </Select>
            </Campo>


            <Campo>
                <Label>Colocación Pantalla</Label>
                <Select
                    name="display"
                    value={display}
                    onChange={obtenerInformacion}
                >
                    <option value="----">-- Seleccione --</option>
                    <option value="si">Colocación de Display $1200</option>
                </Select>   
            </Campo>



            <Boton type="submit">Cotizar</Boton>

        </form>

     );
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;