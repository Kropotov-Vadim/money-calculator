export interface ProductPreview extends Product{
  summrange: ProductSummRange;
}
export interface Product{
  id: number;
  mindays: number;
  maxdays: number;
  stepdays: number;
  rate: number;
  name: string;
  description: string;
  type: ProductType;
}

export interface ProductSummRange {
  minsumm: number;
  maxsumm: number;
  stepsumm: number;
}

export enum ProductType {
  PDL = 'PDL',
  IL = 'IL'
}
