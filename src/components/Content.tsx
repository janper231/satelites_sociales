import { makeStyles, Paper } from '@material-ui/core';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: 20,
    padding: 20,
    boxShadow: theme.shadows[10],
  },
}));

const Content = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return <Paper className={classes.paper}>{children}</Paper>;
};

export default Content;
