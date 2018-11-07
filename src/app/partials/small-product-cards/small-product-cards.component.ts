import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_services/user.service';


@Component({
   selector: 'app-small-product-cards',
   templateUrl: './small-product-cards.component.html',
   styleUrls: ['./small-product-cards.component.scss']
})
export class SmallProductCardsComponent implements OnInit {

   @Input()
   products: any;

   constructor(private userService: UserService) { }

   ngOnInit() {
   }

   addProductToCollection(id: string) {
      this.userService.addProductToCollection(localStorage.getItem("username"), id).subscribe();
   }
}
