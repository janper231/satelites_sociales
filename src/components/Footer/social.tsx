import React from 'react';
import { Grid, Link, makeStyles, Typography } from '@material-ui/core';

import socialNetwrok from 'src/constants/socialNetwrok';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const Social = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        component="h6"
        variant="caption"
        gutterBottom
        className={classes.sidebarSection}
      >
        Siguenos en nuestros canales!
      </Typography>
      {socialNetwrok.map(network => (
        <Link
          display="block"
          variant="caption"
          href={network.url}
          key={'network_' + network.name}
          target="_blank"
        >
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </>
  );
};

export default Social;
