import React from 'react';
import { Container } from '@material-ui/core';

import Footer from '../Footer';

type Props = {
  children?: any;
  title?: string;
};

const Admin = (props: Props) => {
  const { children, title = '' } = props;

  return (
    <>
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
      <Footer title={title} />
    </>
  );
};

export default Admin;
