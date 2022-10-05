import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bIndex: number = 0;
  bannerProds: any[] = [];

  constructor() {
    this.bannerProds = [
      {
        title: 'Nike Airmax',
        description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget..',
        image: '/assets/images/gallery/shoe.jpeg',
        oldPrice: '$199',
        sellPrice: '$134'
      },
      {
        title: 'Woodlands',
        description: 'Handmade three layer leather shoes...',
        image: '/assets/images/gallery/jerkin.jpeg',
        oldPrice: '$259',
        sellPrice: '$199'
      }
    ]
  }

  ngOnInit(): void {
  }

  changeProduct(symbol: string) {
    if (symbol === '+') {
      if (this.bIndex < this.bannerProds.length - 1) {
        this.bIndex++;
      }
    } else {
      if (this.bIndex > 0) {
        this.bIndex--;
      }
    }
  }

}
