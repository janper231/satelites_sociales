import React from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';

import Main from 'src/components/Main';
import Content from 'src/components/Content';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Vision = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <>
      <Main title="Objetivos" image="/img/satelites/satelite1.jpeg" />
      <Content>
        <AppBar
          position="static"
          style={{ borderRadius: 20, backgroundColor: '#4d60a5' }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Objetivos Generales" {...a11yProps(0)} />
            <Tab label="Objetivos específicos" {...a11yProps(1)} />
            <Tab label="Líneas de trabajo" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Typography variant="body1">
            Apoyar la productividad de las zonas Agrícolas y de Turismo para la
            región de Alto Magdalena, Tequendama y Sumapaz, en el departamento
            de Cundinamarca, a partir de la implementación, capacitación y
            desarrollo de herramientas tecnológicas que facilitará el análisis
            de datos satelitales.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body1">
            <ul>
              <li>Generar y ejecutar metodologías de aprendizaje.</li>
              <li>
                Participar en diferentes proyectos sociales y científicos.
              </li>
              <li>
                Implementar una herramienta tecnológica libre que facilite y
                mejore la interpretación de los datos satelitales
              </li>
            </ul>
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body1">
            <ul>
              <li>Ingeniería de Requerimientos</li>
              <li>Ingeniería de software para análisis de datos.</li>
            </ul>
          </Typography>
        </TabPanel>
      </Content>
    </>
  );
};

export default Vision;
