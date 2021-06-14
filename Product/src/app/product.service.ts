import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  imageRootPath = 'assets/productsImage/';
  getAllProducts():ProductDetails[]
  {
    let titanFrame : ProductDetails = {
      productName:'Titan-Frame 1',
      productCost:2000,
      productDescription: 'Rimless rectangular glasses',
      rating:4.7,
      imageName:'assets/productsImage/titan-frame 1.PNG'
    }
    let titanFrame2 : ProductDetails = {
      productName:'Titan-Frame 2',
      productCost:2500,
      productDescription: ' rectangular glasses',
      rating:4.9,
      imageName:'assets/productsImage/Titan-Frame 2.PNG'
    }
    let CalvinKlein: ProductDetails = {
      productName:'CalvinKlein',
      productCost:4000,
      productDescription: 'Latest CalvinKlein Frame',
      rating:3.8,
      imageName:'assets/productsImage/Calvin klein.PNG'
    }
    let RayBan: ProductDetails = {
      productName:'RayBan 2021',
      productCost:7000,
      productDescription: 'RayBAn Adjustable Frame',
      rating:5,
      imageName:'assets/productsImage/Rayban.PNG'
    }
    let Varsace: ProductDetails = {
      productName:'Varsace ',
      productCost:7000,
      productDescription: 'Varsace 2021 Collection ',
      rating:5,
      imageName:'assets/productsImage/Varsace.PNG'
    }
    return  [titanFrame ,titanFrame2 ,  CalvinKlein, RayBan, Varsace] ;
  }
 
}
