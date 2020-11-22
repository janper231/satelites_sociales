import React from 'react';
import NextLink from 'next/link';
import { Toolbar, Button, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  button: {
    borderRadius: 20,
  },
  img: {
    width: 100,
    height: 50,
    borderRadius: 20,
  },
}));

type Props = {
  sections: { title: string; url: string }[];
  title: string;
  img?: string;
};

const Header = (props: Props) => {
  const classes = useStyles();
  const { sections, title, img } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        {img && <img src={img} alt={title} className={classes.img} />}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <NextLink href="/admin/login">
          <Button variant="outlined" size="small" className={classes.button}>
            Ingresar
          </Button>
        </NextLink>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <NextLink href={section.url} key={section.title}>
            <Link
              noWrap
              href="#"
              color="inherit"
              variant="body2"
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          </NextLink>
        ))}
      </Toolbar>
    </>
  );
};

export default Header;
