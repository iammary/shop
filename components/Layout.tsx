import * as React from 'react';
import Head from 'next/head';
import { GlobalStyle, Footer, MainContainer } from '../styles';
import { Normalize } from 'styled-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row } from 'reactstrap';

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ( { children, title = 'The Grid | Simply Wall Street' } ) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      <link href='https://fonts.googleapis.com/css?family=Muli:300,400,600,700' rel='stylesheet' type='text/css' />
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
    </Head>
    <Normalize/>
    <GlobalStyle/>
    <MainContainer>
      { children }
    </MainContainer>
    <Footer>
      <Container>
        <Row>
          <Col>
            ❤️ Submitted by <a href="http://www.jes.ph/" target="_blank">Jes Anub</a>
          </Col>
        </Row>
      </Container>
    </Footer>
  </div>
);

export default Layout;
