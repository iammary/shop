export interface ProductState {
  activeColor: string;
}

export interface TabState {
  activeTab: number;
}

export interface TabProps {
  titles: Array<string>;
  contents: Array<string>;
}

export interface Price {
  original: number;
  discounted: number;
  currency: string;
}

export interface ProductDetailsState {
  dropdownOpen: boolean;
  activeColor: string;
  btnText: string;
  added: boolean;
  alertVisible: boolean;
  loading: boolean;
}

export interface ProductProps {
  title: string;
  subtitle: string;
  price: Price;
  description: string;
  details: string;
  colors: Array<string>;
  code: string;
  updateColor: ( id: string ) => void;
}

export interface ProductImageProps {
  url: string;
  name: string;
}