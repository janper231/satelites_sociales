import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import Social from './social';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
    marginTop: 20,
  },
}));

type Props = {
  description?: string;
  title: string;
};

const Footer = (props: Props) => {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Grid item>
              <Social />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
