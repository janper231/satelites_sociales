import React from 'react';
import { Typography } from '@material-ui/core';

import Main from 'src/components/Main';
import Content from 'src/components/Content';

const Home = () => {
  return (
    <>
      <Main
        title="El futuro al alcance de todos. "
        image="/img/satelites/satelite5.png"
      />
      <Content>
        <Typography variant="subtitle1">
          El Semillero SATÉLITES SOCIALES - SATSOC, a través del análisis de
          oportunidades de la información satelital que nos aportará el programa
          Europeo COPÉRNICO entre otros programas de manera libre o gratuita,
          busca cómo la tecnología emergente y aquellas que están en estado
          estable, apoyen al desarrollo integral y sostenible en zonas agrícolas
          y de turismo en la región de Alto Magdalena, Tequendama y Sumapaz, en
          el departamento de Cundinamarca, Colombia. Este semillero está
          vinculado al grupo de Ingenieros Sin Fronteras de Colombia, que tiene
          su sede principal en el Parque Científico de Innovación Social (PCIS)
          de UNIMINUTO.
        </Typography>
      </Content>
    </>
  );
};

export default Home;
