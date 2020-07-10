import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from 'src/app/core/services/product/products.service';
import { Product } from 'src/app/core/models/product.model';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {

      // console.log(params);
      const id = params.id;
      this.fetchProduct(id);
      console.log(this.product);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      // console.log(product);
      this.product = product;
    });
  }

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-2.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
    console.log(product);
   });
 }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5555,
      description: 'edición titulo',
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
    console.log(product);
   });
  }

  deleteProduct() {
    this.productsService.deleteProduct('')
    .subscribe(product => {
    console.log(product);
   });
  }

}
