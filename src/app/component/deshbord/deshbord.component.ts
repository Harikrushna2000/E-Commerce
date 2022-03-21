import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-deshbord',
  templateUrl: './deshbord.component.html',
  styleUrls: ['./deshbord.component.css']
})
export class DeshbordComponent implements OnInit {

  constructor(private cart:CartService) { }

  totalItem:any;
  public searchTerm:string = '';

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cart.search.next(this.searchTerm);
  }

}
