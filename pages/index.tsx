import * as React from 'react';
import Layout from '../components/Layout';
import { Col, Container, Row } from 'reactstrap';
import { mock } from '../utils/constants';
import ProductDetails from '../components/ProductDetails';
import ProductImage from '../components/ProductImage';
import { ProductState } from '../interfaces';

class IndexPage extends React.Component<{}, ProductState> {
  state: ProductState;

  constructor ( props: {} ) {
    super( props );
    this.state = {
      activeColor : mock.colors[ 0 ]
    };
  }

  updateColor = ( color: string ) => {
    this.setState( {
      activeColor : color
    } );
  };

  render () {
    // Assuming all images follow the same naming format
    const currentImage     = `/static/${ mock.code }-${ this.state.activeColor }.jpg`;
    const productImageName = `mock.title - ${ this.state.activeColor }`;
    return (
      <Layout title={ `${ mock.title } | The Shop` }>
        <Container className="main">
          <Row>
            <Col sm="12" lg="6" className="details-container">
              <ProductDetails { ...mock } updateColor={ this.updateColor }/>
            </Col>
            <Col sm="12" lg="6" className="product-img">
              <ProductImage url={ currentImage } name={ productImageName }/>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default IndexPage;
