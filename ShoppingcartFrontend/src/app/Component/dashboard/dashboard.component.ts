import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { DataServiceService } from 'src/app/Service/DataService/data-service.service';
import { $ } from 'protractor';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productArray: any = [];
  count: any = 0;
  cartData: any = [];
  totalamount: any;
  cartArray: any;
  message: string;
  constructor(private productservice: ProductService,private dataService: DataServiceService) { }

  ngOnInit() {
   
    if (JSON.parse(localStorage.getItem('cartCount'))) {
      this.cartData = JSON.parse(localStorage.getItem('cartCount'))
    
     console.log("cartno..",this.count);
     
    }
    console.log('...', JSON.parse(localStorage.getItem('cartCount')));
    this.productList();
 //   this.cartList();
    // this.getDetails();

  }
  productList() {
    //  alert("product list ");
    this.productservice.getProduct().subscribe((response: any) => {
      this.productArray = response.result;
      console.log("productlist", this.productArray);
    })
  }
  addCart(item) {
    var temp = true;
    this.cartData.forEach(element => {
      if (element.productID == item.productID) {
        element.count = element.count + 1;
        temp = false
      }
    }
    );
    if (temp) {
      item.count = 1;
      this.cartData.push(item); 
    }
    localStorage.setItem('cartCount', JSON.stringify(this.cartData));
    console.log("total amount______________", this.totalamount, "Count&&&&", this.count);
    this.dataService.changeMessage({"type":''});
  }
  
}
