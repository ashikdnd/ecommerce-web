import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkout-items',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.css']
})
export class CheckoutItemsComponent implements OnInit {
  itemsInCart: any[] = [
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
