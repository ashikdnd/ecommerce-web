import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  products: any[] = [];

  constructor() {
    this.products = [
      {
        title: 'Black Shoes',
        image: 'http://demo.minimalthemes.net/shopping-static/images/sample-2.jpg',
        itemNo: '1000',
        url: '/product-info'
      },
      {
        title: 'Nikon Camera',
        image: 'http://demo.minimalthemes.net/shopping-static/images/sample-1.jpg',
        itemNo: '1001',
        url: '/product-info'
      },
      {
        title: 'DigiCam',
        image: 'http://demo.minimalthemes.net/shopping-static/images/sample-3.jpg',
        itemNo: '1003',
        url: '/product-info'
      },
      {
        title: 'Nike Shoes',
        image: 'http://demo.minimalthemes.net/shopping-static/images/sample-4.jpg',
        itemNo: '1004',
        url: '/product-info'
      }
    ]
  }

  ngOnInit(): void {
  }

}
