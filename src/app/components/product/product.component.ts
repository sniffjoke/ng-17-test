import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IProduct} from "../../models/product";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  standalone: true,
  imports: [CommonModule]
})

export class ProductComponent {
  @Input() product: IProduct

  details = false
}
