import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {IProduct} from "./models/product";
// import {products as data} from "./data/products";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";
import {GlobalErrorComponent} from "./components/global-error/global-error.component";
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";
import {ModalComponent} from "./components/modal/modal.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductComponent,
    HttpClientModule,
    GlobalErrorComponent,
    FormsModule,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular app';

  // products: IProduct[] = []

  loading = false

  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }

}
