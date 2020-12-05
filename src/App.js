import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import Button from '@material-ui/core/Button'

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;


const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {

  const [ resumen, guardarResumen] = useState({
      cotizacion: 0,
      datos: {
        limpieza: '',
        so: '',
        sata: '',
        ram: '',
        disco: ''
      }
  });

  const [ cargando, guardarCargando] = useState(false);

  // extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
        <Header 
          titulo='Cotizador de Presupuesto'
        />
           <Button variant="contained" color="primary" href="https://tunotebooklp.com/">
               Volver a Inicio
            </Button>
        <ContenedorFormulario>
           
            <Formulario 
              guardarResumen={guardarResumen}
              guardarCargando={guardarCargando}
            />

            { cargando ? <Spinner /> : null }
            
            <Resumen 
              datos={datos}
            />

            { !cargando  ?
                <Resultado 
                  cotizacion={cotizacion}
                /> : null
            }
            
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
