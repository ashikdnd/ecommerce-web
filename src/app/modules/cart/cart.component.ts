import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  dataSource = new MatTableDataSource();
  displayedColumns = ["actions", "image", "name", 'model', "item_no", "qty", "price", "total"];

  constructor() {
    this.dataSource.data = [
      {
        image: "http://localhost:4200/assets/images/gallery/shoe.jpeg",
        name: "Nike Shoe",
        model: "ABC",
        item_no: "NK130",
        qty: 2,
        price: 1500,
        total: 3000
      },
      {
        image: "https://demo.minimalthemes.net/shopping-static/images/demo-img.jpg",
        name: "Tee Shirt",
        model: "TS001",
        item_no: "TS100",
        qty: 5,
        price: 500,
        total: 2500
      },
      {
        image: "http://localhost:4200/assets/images/gallery/shoe.jpeg",
        name: "Nike Shoe",
        model: "ABC",
        item_no: "NK130",
        qty: 2,
        price: 1500,
        total: 3000
      },
      {
        image: "https://demo.minimalthemes.net/shopping-static/images/demo-img.jpg",
        name: "Tee Shirt",
        model: "TS001",
        item_no: "TS100",
        qty: 5,
        price: 500,
        total: 2500
      },
      {
        image: "http://localhost:4200/assets/images/gallery/shoe.jpeg",
        name: "Nike Shoe",
        model: "ABC",
        item_no: "NK130",
        qty: 2,
        price: 1500,
        total: 3000
      },
      {
        image: "https://demo.minimalthemes.net/shopping-static/images/demo-img.jpg",
        name: "Tee Shirt",
        model: "TS001",
        item_no: "TS100",
        qty: 5,
        price: 500,
        total: 2500
      },
      {
        image: "http://localhost:4200/assets/images/gallery/shoe.jpeg",
        name: "Nike Shoe",
        model: "ABC",
        item_no: "NK130",
        qty: 1,
        price: 1500,
        total: 3000
      },
      {
        image: "https://demo.minimalthemes.net/shopping-static/images/demo-img.jpg",
        name: "Tee Shirt",
        model: "TS001",
        item_no: "TS100",
        qty: 5,
        price: 500,
        total: 2500
      },
      {
        image: "http://localhost:4200/assets/images/gallery/shoe.jpeg",
        name: "Nike Shoe",
        model: "ABC",
        item_no: "NK130",
        qty: 2,
        price: 1500,
        total: 3000
      },
      {
        image: "https://demo.minimalthemes.net/shopping-static/images/demo-img.jpg",
        name: "Tee Shirt",
        model: "TS001",
        item_no: "TS100",
        qty: 3,
        price: 500,
        total: 2500
      },
      {
        image: "http://localhost:4200/assets/images/gallery/shoe.jpeg",
        name: "Nike Shoe",
        model: "ABC",
        item_no: "NK130",
        qty: 3,
        price: 1500,
        total: 3000
      },
      {
        image: "https://demo.minimalthemes.net/shopping-static/images/demo-img.jpg",
        name: "Tee Shirt",
        model: "TS001",
        item_no: "TS100",
        qty: 4,
        price: 500,
        total: 2500
      }
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(e: any): void {
    this.dataSource.filter = e.target.value.toLowerCase();
  }

  removeItemFromCart(product: any, i: number): void {
    let items = this.dataSource.data;
    items.splice(i, 1);
    this.dataSource.data = items;
  }

}
