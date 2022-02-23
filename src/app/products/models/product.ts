/* Defines the product entity */
export interface Product {
    id: number;
    productName: string;
    productCode?: string;
    description?: string;
    price?: string;
    categoryId?: number;
    category?: string;
    quantityInStock?: number;
    searchKey?: string[];
    supplierIds?: number[];
  }
  