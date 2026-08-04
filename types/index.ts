export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  href?: string;
  [key: string]: any;
}

export interface CartItem extends Product {
  quantity: number;
}
