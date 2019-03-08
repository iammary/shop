import * as React from 'react';
import { ProductImageProps } from '../interfaces';
import { ImgRes, ProductImageContainer } from '../styles';

const ProductImage: React.FunctionComponent<ProductImageProps> = ( props ) => {
  return <ProductImageContainer>
    <ImgRes src={ props.url } alt={ props.name }/>
  </ProductImageContainer>;
};

export default ProductImage;
