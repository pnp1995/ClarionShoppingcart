import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  httpHeaders = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  }

  constructor(private httpservice: HttpService) { }

  getProduct() {  
   return this.httpservice.get('Product/list');
  }

  addToCart(item){      
   return this.httpservice.post('products',item) 
  }
  getCartlist() {
   return this.httpservice.getCart();
  }
  getProductbyid(id) {
    return this.httpservice.getProduct(`Product/getProductById/${id}`);
  }
 
}
