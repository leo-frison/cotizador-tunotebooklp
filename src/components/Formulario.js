import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { calcularLimpieza, obtenerSO, obtenerDisplay, obtenerSSD, obtenerRAM, obtenerHDD, obtenerBackup, calcularDURO, calcularSATA, calcularM2, calcularM2PCIE, calcularRAM3, calcularRAM4 } from '../helper';

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
        limpieza: '',
        so: '',
        display: '',
        ssd: '',
        ram: '',
        hdd: '',
        backup: '',
        disco: '',
        sata: '',
        m2: '',
        pcie: '',
        ram3: '',
        ram4: ''

    });
    const [ error, guardarError ] = useState(false);

    // extraer los valores del state
    const { limpieza, so, display, ssd, ram, hdd, backup, disco, sata, m2, pcie, ram3, ram4 } = datos;

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

        if(limpieza.trim() === '' || so.trim() === '' || display.trim() === '' || ssd.trim() === '' || ram.trim() === '' || hdd.trim() === '' || backup.trim() === '' || disco.trim() === '' || sata.trim() === '' || m2.trim() === '' || pcie.trim() === '' || ram3.trim() === '' || ram4.trim() === '') {
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
        // No instala so no aumento nada
        const incrementoSO = obtenerSO(so);
        resultado = incrementoSO + resultado;


        // Coloco display aumento 1200
        // No coloco display no aumento nada
        const incrementoDisplay = obtenerDisplay(display);
        resultado = incrementoDisplay + resultado;

         // Coloco SSD aumento 300
        // No coloco SSD no aumento nada
        const incrementoSSD = obtenerSSD(ssd);
        resultado = incrementoSSD + resultado;


        // Coloco RAM aumento 300
        // No coloco RAM no aumento nada
        const incrementoRAM = obtenerRAM(ram);
        resultado = incrementoRAM + resultado;

        // Coloco HDD aumento 300
        // No coloco HDD no aumento nada
        const incrementoHDD = obtenerHDD(hdd);
        resultado = incrementoHDD + resultado;

        // Realizo backup menor a 35 gb
        // Realizo backup mayor a 35gb
        const incrementoBackup = obtenerBackup(backup);
        resultado = incrementoBackup + resultado;

        // Calcula precio de hdd sata
        resultado = calcularDURO(disco) + resultado;
        
        
        // Calcula precio de ssd sata
        resultado = calcularSATA(sata) + resultado;


        // Calcula precio de ssd m2
        resultado = calcularM2(m2) + resultado;


        // Calcula precio de ssd m2 pcie
        resultado = calcularM2PCIE(pcie) + resultado;


        // Calcula precio de ram soddim 3
        resultado = calcularRAM3(ram3) + resultado;


        // Calcula precio de ram soddim 4
        resultado = calcularRAM4(ram4) + resultado;

        

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
                <Label>Limpieza</Label>
                <Select
                    name="limpieza"
                    value={limpieza}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="basica">Basica</option>
                    <option value="advance">Advance</option>
                    <option value="prog">ProG</option>
                </Select>
            </Campo>

 

            <Campo>
                <Label>Instalacion SO</Label>
                <InputRadio 
                    type="radio"
                    name="so"
                    value="si"
                    checked={so === "si"}
                    onChange={obtenerInformacion}
                /> SI

                <InputRadio 
                    type="radio"
                    name="so"
                    value="no"
                    checked={so === "no"}
                    onChange={obtenerInformacion}
                /> NO
            </Campo>



            <Campo>
                <Label>Colocación Display</Label>
                <InputRadio 
                    type="radio"
                    name="display"
                    value="si"
                    checked={display === "si"}
                    onChange={obtenerInformacion}
                /> SI

                <InputRadio 
                    type="radio"
                    name="display"
                    value="no"
                    checked={display === "no"}
                    onChange={obtenerInformacion}
                /> NO
            </Campo>



             <Campo>
                <Label>Colocación SSD</Label>
                <InputRadio 
                    type="radio"
                    name="ssd"
                    value="si"
                    checked={ssd === "si"}
                    onChange={obtenerInformacion}
                /> SI

                <InputRadio 
                    type="radio"
                    name="ssd"
                    value="no"
                    checked={ssd === "no"}
                    onChange={obtenerInformacion}
                /> NO
            </Campo>

            <Campo>
                <Label>Colocación RAM</Label>
                <InputRadio 
                    type="radio"
                    name="ram"
                    value="si"
                    checked={ram === "si"}
                    onChange={obtenerInformacion}
                /> SI

                <InputRadio 
                    type="radio"
                    name="ram"
                    value="no"
                    checked={ram === "no"}
                    onChange={obtenerInformacion}
                /> NO
            </Campo>



            <Campo>
                <Label>Colocación HDD</Label>
                <InputRadio 
                    type="radio"
                    name="hdd"
                    value="si"
                    checked={hdd === "si"}
                    onChange={obtenerInformacion}
                /> SI

                <InputRadio 
                    type="radio"
                    name="hdd"
                    value="no"
                    checked={hdd === "no"}
                    onChange={obtenerInformacion}
                /> NO
            </Campo>


            <Campo>
                <Label>Back up de Datos</Label>
                <InputRadio 
                    type="radio"
                    name="backup"
                    value="si"
                    checked={backup === "si"}
                    onChange={obtenerInformacion}
                /> Hasta 35GB 

                <InputRadio 
                    type="radio"
                    name="backup"
                    value="no"
                    checked={backup === "no"}
                    onChange={obtenerInformacion}
                /> Mas de 35GB
            </Campo>


            <Campo>
                <Label>HDD</Label>
                <Select
                    name="disco"
                    value={disco}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="----">Omitir Seleccion</option>
                    <option value="500GB">500GB</option>
                    <option value="1TB">1TB</option>
                    <option value="otros">otros</option>
                </Select>
            </Campo>


            <Campo>
                <Label>SSD SATA</Label>
                <Select
                    name="sata"
                    value={sata}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="----">Omitir Seleccion</option>
                    <option value="120GB">120GB</option>
                    <option value="240GB">240GB</option>
                    <option value="otros">500GB</option>
                </Select>
            </Campo>


            <Campo>
                <Label>SSD M.2</Label>
                <Select
                    name="m2"
                    value={m2}
                    onChange={obtenerInformacion}
                >
                   <option value="">-- Seleccione --</option>
                    <option value="----">Omitir Seleccion</option>
                    <option value="128GB">128GB</option>
                    <option value="256GB">256GB</option>
                    <option value="otros">500GB</option>
                </Select>
            </Campo>


            <Campo>
                <Label>SSD M.2 pcie</Label>
                <Select
                    name="pcie"
                    value={pcie}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="----">Omitir Seleccion</option>
                    <option value="128GB">128GB</option>
                    <option value="256GB">256GB</option>
                    <option value="otros">500GB</option>
                </Select>
            </Campo>


            <Campo>
                <Label>RAM SODDIM3</Label>
                <Select
                    name="ram3"
                    value={ram3}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="----">Omitir Seleccion</option>
                    <option value="4GB">4GB</option>
                    <option value="8GB">8GB</option>
                    <option value="otros">16GB</option>
                </Select>
            </Campo>


            <Campo>
                <Label>RAM SODDIM4</Label>
                <Select
                    name="ram4"
                    value={ram4}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="----">Omitir Seleccion</option>
                    <option value="4GB">4GB</option>
                    <option value="8GB">8GB</option>
                    <option value="otros">16GB</option>
                </Select>
            </Campo>

            <Boton type="submit">Cotizar</Boton>

            { error ? <Error>Todos los campos son obligatorios</Error>  : null }
        </form>

     );
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;