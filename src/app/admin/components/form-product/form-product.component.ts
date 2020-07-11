import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/product/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.builForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event ) {
    event.preventDefault();
    if (this.form.valid ){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe( newproduct => {
        console.log(product);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  private builForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required] ],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }

}