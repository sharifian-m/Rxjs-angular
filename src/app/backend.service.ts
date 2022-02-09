import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProductCategoryData } from './fake-data/product-category-data';
import { ProductData } from './fake-data/product-data';
import { SupplierData } from './fake-data/supplier-data';
import { Product } from './products/models/product';
import { ProductCategory } from './products/models/ProductCategory';
import { Supplier } from './products/models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  createDb(): { products: Product[], productCategories: ProductCategory[], suppliers: Supplier[]} {
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    const suppliers = SupplierData.suppliers;
    return { products, productCategories, suppliers };
  }
}
