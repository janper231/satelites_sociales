import React from 'react';
import { Typography } from '@material-ui/core';

import Main from 'src/components/Main';
import Content from 'src/components/Content';

const Vision = () => {
  return (
    <>
      <Main title="Visión" image="/img/satelites/satelite1.jpeg" />
      <Content>
        <Typography variant="subtitle1">
          Para finales del año 2023, ser catalogado como un semillero de
          investigación de Innovación Social y Productiva, que cuente con el
          reconocimiento a nivel local y regional en aspectos relacionados al
          análisis de datos satelitales, conducentes al aporte de soluciones en
          zonas agrícolas y de turismo para la región de Alto Magdalena,
          Tequendama y Sumapaz, en el departamento de Cundinamarca, Colombia.
        </Typography>
      </Content>
    </>
  );
};

export default Vision;
