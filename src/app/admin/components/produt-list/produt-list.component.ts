import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/product/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-produt-list',
  templateUrl: './produt-list.component.html',
  styleUrls: ['./produt-list.component.scss']
})
export class ProdutListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {

    this.productsService.getAllProducts()
    .subscribe( products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe( rta => {
      this.fetchProducts();
      console.log(rta);
    });
  }

}
