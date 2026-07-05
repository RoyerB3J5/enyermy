export interface LightProduct {
  id: string;
  nombre: string;
  precio: string;
  imagen: string;
  marca: string;
  tieneAtributos: boolean;
}

export interface FrontendProductDetail {
  id: string;
  nombre: string;
  descripcionArray: string[];
  imagenes: string[];
  variaciones: {
    id:string
    nombre: string;
    precio: string;
  }[];
  table: {
    nombre: string;
    valor: string;
  }[];
  [key: string]: any;
}
