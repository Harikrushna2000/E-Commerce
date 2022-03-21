import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public cartItem:any = [];

  getProduct(){
    return this.productList.asObservable();
  }

  addData(product:any){
    this.cartItem.push(product);  
    this.productList.next(this.cartItem)
    console.log(this.cartItem);
  }
  
  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItem.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItem.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItem.splice(index,1);
      }
    })
    this.productList.next(this.cartItem);
  }
  removeAllitem(){
    this.cartItem = [];
    this.productList.next(this.cartItem);
  }
}
