import { Product, ProductSummRange } from "src/app/models/product.model";

export interface JsonModel extends ProductSummRange{
  products: Product[]
}
