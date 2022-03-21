import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  filterCategory:any;
  productlist:any = [];
  constructor(private api:ApiService,
    private cart:CartService) { }

    searchKey:string = '';

  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productlist = res;
      this.filterCategory = res;
      this.productlist.forEach((a:any) => {
        if(a.category == "men's clothing" || a.category == "women's clothing"){
          a.category = "fashion";
        }
      });
      console.log(this.productlist)
    });

    this.cart.search.subscribe(val=>{
      this.searchKey = val;
    })
  }

  addCart(item:any){
    this.cart.addData(item);
  }

  filter(category:string){
    this.filterCategory = this.productlist.filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
  }  

}
