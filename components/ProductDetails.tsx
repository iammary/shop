import * as React from 'react';
import ProductDetailsTab from '../components/ProductDetailsTab';
import { ProductProps, ProductDetailsState } from '../interfaces';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Alert } from 'reactstrap';
import { BreadCrumbs, ProductTitle, ProductSubtitle, Price, Product, ProductColors } from '../styles';


class ProductDetails extends React.Component<ProductProps, ProductDetailsState> {

  state: ProductDetailsState;

  constructor ( props: ProductProps ) {
    super( props );
    this.state = {
      dropdownOpen : false,
      activeColor  : this.props.colors[ 0 ],
      btnText      : 'Add to Cart',
      added        : false,
      alertVisible : false,
      loading      : false
    };
  }

  toggle = () => {
    this.setState( {
      dropdownOpen : !this.state.dropdownOpen
    } );
  };

  changeColor = ( e: any ) => {
    const color = e.currentTarget.textContent;
    this.setState( { activeColor : color } );
    this.props.updateColor( color );
  };

  addToCart = () => {
    this.setState( {
      btnText : 'Loading...',
      added   : true,
      loading : true
    } );

    setTimeout( () => {
      this.setState( {
        btnText      : 'View Cart',
        alertVisible : true,
        loading      : false
      } );
    }, 2000 );
  };

  onDismiss = () => {
    this.setState( { alertVisible : false } );
  };

  render () {
    const { title, subtitle, price, description, details, colors } = this.props;

    return <Product>
      <BreadCrumbs>&larr; All Products</BreadCrumbs>
      <ProductTitle>{ title }</ProductTitle>
      <ProductSubtitle>{ subtitle }</ProductSubtitle>
      <ProductDetailsTab titles={ [ 'DESCRIPTION', 'DETAILS' ] } contents={ [ description, details ] }/>
      <Price className="price">
        { price.currency }{ price.discounted } <span>{ price.currency }{ price.original }</span>
      </Price>
      <ProductColors>
        <h6>COLORS</h6>
        <ButtonDropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
          <DropdownToggle caret color="light">
            { this.state.activeColor }
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={ this.changeColor }>{ colors[ 0 ] }</DropdownItem>
            <DropdownItem onClick={ this.changeColor }>{ colors[ 1 ] }</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ProductColors>
      <hr/>
      <Alert color="success" isOpen={ this.state.alertVisible } toggle={ this.onDismiss }>
        Item added to cart!
      </Alert>
      <Button className="btn-cart" size="lg" color="primary" disabled={ this.state.loading }
              onClick={ this.addToCart }>{ this.state.btnText }</Button>
    </Product>;
  }
}

export default ProductDetails;
