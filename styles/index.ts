import { createGlobalStyle } from './styled-components';
import theme from './theme';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Muli', sans-serif;
    background-color: ${ theme.bodyBg };
    margin: 0;
  }
  * {
    color: ${ theme.primaryColor };
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }
`;

export const MainContainer = styled.div`
  font-size: 14px;
  min-height: calc(100vh - 110px);
  .main.container {
    background: ${theme.bg};
    border-radius: 5px;
    position: relative;
    @media (min-width: 768px) {
      margin-top: 50px;
    }
    @media (min-width: 992px) { 
      padding-bottom: 0;
      min-height: 0;
    }
  }
  .product-img {
    position: absolute;
    top: 50px;
    @media (min-width: 992px) { 
      position: relative;
      top: 0;
    }
  }
  .details-container {
    padding-bottom: 50px;
    border-right: 1px solid ${theme.bodyBg};
  }
`;
export const Product = styled.div`
  @media (min-width: 992px) {
   padding: 0 50px;
  }
  .btn {
    text-transform: uppercase;
    font-size: 12px;
  }
  .btn-cart {
    margin-top: 10px;
    font-weight: bold;
    min-width: 200px;
    padding: 15px 20px
  }
  hr {
    @media (min-width: 992px) {
      margin: 0 -65px 40px;
    }
  }
`;
export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
  @media (min-width: 992px) {
    font-size: 28px;
  }
`;
export const ProductTabs = styled.div`
  margin-top: 30px;
  .nav-tabs {
    @media (min-width: 992px) {
      margin: 0 -65px;
      padding: 0 65px;
    }
  }
  .nav-tabs .nav-link {
    font-size: 14px;
    font-weight: 600;
    &.active {
      border: 0;
      border-bottom: 1px solid ${ theme.blue };
    }
  }
  .tab-content {
    padding: 25px 0;
  }
  @media (min-width: 992px) {
    margin-top: 50px;
  }
`;
export const ProductImageContainer = styled.div`
  height: 300px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
    height: auto;
  }
`;
export const ProductColors = styled.div`
  margin-bottom: 25px;
  h6 {
    font-size: 12px;
    font-weight: bold;
  }
  .btn {
    border: 1px solid ${theme.secondaryColor};
    background: transparent;
  }
  .dropdown-toggle::after {
    content: '\\2228';
    border: 0;
    margin-left: 10px;
    color: ${theme.secondaryColor};
    font-size: 12px;
  }
  .dropdown-item {
    text-transform: uppercase;
    font-size: 12px;
  }
  @media (min-width: 992px) {
    margin-bottom: 40px;
  }
`;
export const ProductSubtitle = styled.h2`
  font-size: 14px;
  color: ${ theme.secondaryColor };
`;
export const BreadCrumbs = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 370px;
  @media (min-width: 992px) { 
    margin-bottom: 70px;
  }
`;
export const Price = styled.h4`
  font-weight: 700;
  margin-bottom: 25px;
  span {
    color: ${ theme.secondaryColor };
    margin-left: 20px;
    text-decoration: line-through;
  }
  @media (min-width: 992px) {
    margin-bottom: 40px;
  }
`;
export const ImgRes = styled.img`
  max-width: 100%;
  height: inherit;
  margin: 20px auto;
  display: block;
  @media (min-width: 992px) { 
    width: 100%;
    height: auto;
  }
`;
export const Footer = styled.footer`
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
`;
