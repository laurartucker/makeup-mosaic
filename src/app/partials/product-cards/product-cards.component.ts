import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-product-cards',
   templateUrl: './product-cards.component.html',
   styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {

   @Input()
   products: any;



   constructor() { }

   ngOnInit() {
   }

}
