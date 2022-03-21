import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService) { }

  product:any = [];
  grandTotal !:number;

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.product = res;
      this.product.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
      this.grandTotal = this.cart.getTotalPrice();
    })
  }

  removItem(item:any){
    this.cart.removeCartItem(item);
  }

  emptyItem(){
    this.cart.removeAllitem();
  }
}
