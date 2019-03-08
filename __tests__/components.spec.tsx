import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Layout from '../components/Layout';
import ProductDetails from '../components/ProductDetails';
import ProductDetailsTab from '../components/ProductDetailsTab';
import ProductImage from '../components/ProductImage';
import { mock } from '../utils/constants';

describe( 'Components', () => {
  describe( 'Layout', () => {
    it( 'should render without throwing an error', function () {
      const renderedComponent = mount( <Layout/> );
      expect( renderedComponent ).toBeTruthy();
    } );
  } );

  describe( 'Product Details', () => {
    it( 'should render without throwing an error', function () {
      const renderedComponent = shallow( <ProductDetails {...mock} updateColor={()=>{}} /> );
      expect( renderedComponent ).toBeTruthy();
    } );
  } );

  describe( 'Product Details Tabs', () => {
    it( 'should render without throwing an error', function () {
      const renderedComponent = shallow( <ProductDetailsTab titles={ [ 'DESCRIPTION', 'DETAILS' ] } contents={ [ mock.description, mock.details ] } /> );
      expect( renderedComponent ).toBeTruthy();
    } );
  } );

  describe( 'Product Image', () => {
    it( 'should render without throwing an error', function () {
      const renderedComponent = shallow( <ProductImage url={ 'test' } name={ 'test' } /> );
      expect( renderedComponent ).toBeTruthy();
    } );
  } );
} );