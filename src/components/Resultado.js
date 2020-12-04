import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
import PropTypes from 'prop-types';
import ReactWhatsapp from '../ReactWhatsapp';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    font-weight: bolder;
    padding: 1rem;
    text-align: center;
`;

const number='54 9 2216 76-7615';

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:  rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin: 0;
`;


const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) 
            ? <Mensaje>Saca una captura de pantalla del resumen de cotizacion y envianos la imagen por whatsapp</Mensaje> 
            :  
                (
                    <ResultadoCotizacion>
                        <TransitionGroup
                            component="span"
                            className="resultado"
                        >
                            <CSSTransition
                                classNames="resultado"
                                key={cotizacion}
                                timeout={{ enter: 500, exit: 500}}
                            >
                                <TextoCotizacion>El total es: $ <span> {cotizacion} </span>  </TextoCotizacion>
                            </CSSTransition>
                        </TransitionGroup>
                        <Mensaje>Saca una captura de pantalla del Resumen de Cotización y envianos la imagen por whatsapp</Mensaje> 
                        <ReactWhatsapp number={number}>
                          Abrir Whatsapp
                        </ReactWhatsapp>
                    </ResultadoCotizacion>
                )
    )
}
 
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}


export default Resultado;