import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ps: ProductService) {
  }

  ngOnInit(): void {
    console.log('products loaded')
    this.ps.getProducts().subscribe((res: any) => {
      console.log(res)
    }, (e) => {
      console.log(e)
    })
  }

}
