import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Service/DataService/data-service.service';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  count: number = 0;
  totalamount: any;
  cartArray: any = [];
  cartData: any = [];
  message: string;
  constructor(private dataService: DataServiceService,) { }

  ngOnInit() {

    console.log(
      "vaibhaw1"
    );
    this.getTotal();

    this.dataService.currentMessage.subscribe((data: any) => {
      console.log(" Data On Subscriber ngOnit ", data);

      console.log("total amount______________///////", this.totalamount, "Count&&&&", this.count);

      if (JSON.parse(localStorage.getItem('cartCount'))) {
        this.cartData = JSON.parse(localStorage.getItem('cartCount'))
      }
     
      this.getDetails();
      console.log("njk===========", this.totalamount);
    });
  }

  getTotal() {
    let total = 0;
    for (var i = 0; i < this.cartArray.length; i++) {
      total += this.cartArray[i].price * this.cartArray[i].count;
      this.totalamount = total;
    }
    return total;
  }
  getDetails() {
    if (JSON.parse(localStorage.getItem('cartCount'))) {
      this.cartData = JSON.parse(localStorage.getItem('cartCount'))
      this.count = this.cartData.length;
      this.cartArray = JSON.parse(localStorage.getItem('cartCount'))
      this.getTotal();
    }
  }

}
