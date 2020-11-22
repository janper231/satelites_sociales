import React from 'react';
import { Typography } from '@material-ui/core';

import Main from 'src/components/Main';
import Content from 'src/components/Content';

const Mision = () => {
  return (
    <>
      <Main title="Misión" image="/img/satelites/satelite7.png" />
      <Content>
        <Typography variant="subtitle1">
          El Semillero Satélites Sociales “Un Espacio para el desarrollo
          integral y Sostenible”, es un grupo conformado por estudiantes del
          programa de Ingeniería de Sistemas, que promueve el desarrollo de la
          capacidad investigativa y creativa de sus integrantes a través de la
          búsqueda de usos prácticos y pertinentes de la información que
          suministran los satélites del programa europeo COPÉRNICO y otros
          programas satelitales que ofrecen información de manera abierta o
          gratuita.
        </Typography>
      </Content>
    </>
  );
};

export default Mision;
