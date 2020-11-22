import React, { ReactNode } from 'react';
import { Container } from '@material-ui/core';

import sections from 'src/constants/menu';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Pos = (props: Props) => {
  const { children, title = '' } = props;

  return (
    <Container maxWidth="lg">
      <Header
        title={title}
        sections={sections}
        img="/img/logo_satelites.jpeg"
      />
      <main>{children}</main>
      <Footer title={title} />
    </Container>
  );
};

export default Pos;
