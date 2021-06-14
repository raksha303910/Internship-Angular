import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  __productService:ProductService;
  unitsInCart:number = 0;

  constructor(ps:ProductService) { 
    this.__productService=ps;
  }

  ngOnInit(): void {
  }
  getAllProducts():ProductDetails[]
  {
    return this.__productService.getAllProducts();
  }
    addToCart()
    {
      this.unitsInCart++;
      console.log(this.unitsInCart);
    }
    doShare(name:String){
      console.log(name + " is shared");
    }
   getRating(n:number): Array<number>{
    return Array(n)
   }
    
}
