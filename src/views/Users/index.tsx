import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Content from 'src/components/Content';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
      backgroundColor: '#30a72e',
      color: '#fff',
    },
    table: {
      minWidth: 650,
    },
  })
);

const Vision = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: '',
    email: '',
    phone: '',
  });
  const [data, setData] = React.useState([]);

  const handleSave = () => {
    fetch('/api/saveuser', {
      method: 'POST',
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        phone: state.phone,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(() => handleList());
  };

  const handleList = () => {
    fetch('/api/listuser')
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => setData(response));
  };

  React.useEffect(() => {
    handleList();
  }, []);

  const handlechange = (props: any) => {
    setState({ ...state, [props.target.id]: props.target.value });
  };

  return (
    <>
      <Content>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Nombres"
            value={state.name}
            onChange={handlechange}
          />
          <TextField
            id="email"
            label="Correo"
            value={state.email}
            onChange={handlechange}
          />
          <TextField
            id="phone"
            label="Numero de telefono"
            value={state.phone}
            onChange={handlechange}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleSave}
          >
            Guardar
          </Button>
        </form>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Celular</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(
                (row: { name: string; email: string; phone: string }) => (
                  <TableRow key={row?.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.phone}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Content>
    </>
  );
};

export default Vision;
