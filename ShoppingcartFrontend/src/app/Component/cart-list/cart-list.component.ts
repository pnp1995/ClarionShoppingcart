import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { DataServiceService } from 'src/app/Service/DataService/data-service.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartArray: any = [];
  cart: any = [];
  counter: number = 0;
  count: number = 0;
  totalamount: number;

  constructor(private productservice: ProductService, private dataService: DataServiceService) { }

  ngOnInit() {
     this.getDetails();
    this.dataService.currentMessage.subscribe((response: any) => {
      console.log("cartlistresponse", response);

      console.log("total amount______________", this.totalamount, "Count&&&&", this.count);

    })

    console.log('cartlist...', JSON.parse(localStorage.getItem('cartCount')));

  }
   getDetails() {
    if (JSON.parse(localStorage.getItem('cartCount'))) {
      this.cartArray = JSON.parse(localStorage.getItem('cartCount'));
      this.count = this.cartArray.length;
      console.log(this.cartArray);
      console.log('aaaaa', this.cartArray);
      this.getTotal();

    }

  }
  addCart(item) {
    var temp = true;
    this.cartArray.forEach(element => {
      if (element.productID == item.productID) {
        element.count = element.count + 1;
        temp = false
      }
    }
    );
    if (temp) {
      item.count = 1;
      this.cartArray.push(item);
    }
    localStorage.setItem('cartCount', JSON.stringify(this.cartArray));
    // this.count = this.cartArray.reduce(function (count, element) {
    //   return count + element.count;
    // }, 0);
     this.getDetails();
    this.dataService.changeMessage({ "gsdg": 'asdfsdfsd' });

  }
  getTotal() {
    let total = 0;
    for (var i = 0; i < this.cartArray.length; i++) {
      total += this.cartArray[i].price * this.cartArray[i].count;
      this.totalamount = total;
    }
    return total;
  }
  removeProduct(item) {
    console.log('remove item count and item', item.count, item);
    if (item.count >= 1) {
      let total = 0;
      this.cartArray.forEach(element => {
        if (element.productID == item.productID) {
          element.count--;
          total = total + (element.price * element.count);
        }
      });
      this.totalamount = total;
      if (item.count == 0) {
        var index = this.cartArray.map(function (e) { return e.productID; }).indexOf(item.productID);
        this.cartArray.splice(index, 1);
        localStorage.setItem('cartCount', JSON.stringify(this.cartArray));
         this.getDetails();
      }
      localStorage.setItem('cartCount', JSON.stringify(this.cartArray));
    }
    this.getTotal();
    console.log("total amount after remove the product ______________", this.totalamount, "Count&&&&", this.count);
    this.dataService.changeMessage({
      "removedata": {
        "total_amount": this.totalamount,
        "count": this.count
      }
    });

  }
}
