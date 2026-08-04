export interface LightProduct {
  id: string;
  idVariant?: string;
  nombre: string;
  precio: string;
  imagen: string;
  marca: string;
  tieneAtributos: boolean;
}

export interface getAllProductsType {
  id: string;
  idVariant?: string;
  nombre: string;
  precio: string;
  imagenes: string[];
  marca: string;
  tieneAtributos: boolean;
  bestSeller: string | null;
  categoriaId: string | null;
  categoriaNombre: string | null;
  createdAt: string | null;
  cabelloTipo?: string;
}

export interface FrontendProductDetail {
  id: string;
  nombre: string;
  descripcionArray: string[];
  imagenes: string[];
  variaciones: {
    id: string;
    nombre: string;
    precio: string;
  }[];
  table: {
    nombre: string;
    valor: string;
  }[];
  ingredientsArray?: string[];
  [key: string]: any;
}

export interface CategoryProduct {
  id: string;
  image: string;
  tag: string;
  title: string;
  list: string[];
  perfectFor: string;
  results: string;
  precio: string;
}
