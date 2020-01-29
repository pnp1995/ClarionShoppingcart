import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartArray: any = [];
  cart: any = [];
  // increment: number;
  // decrement: number;
  counter: number = 0;
  count: number = 0;
  totalamount: number;

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    // this.cartList();
    this.getDetails();
    console.log('cartlist...', JSON.parse(localStorage.getItem('cartCount')));
  }
  getDetails() {
    if (JSON.parse(localStorage.getItem('cartCount'))) {
      // this.cartArray = JSON.parse(localStorage.getItem('cartCount'))
      console.log("gasdf", this.cartArray);
      this.cartArray = JSON.parse(localStorage.getItem('cartCount'));
      this.count = this.cartArray.length;
      console.log(this.cartArray);
      
      this.cartArray.forEach(element => {
        if (element.count === 0) {
          console.log(element);
          let i = this.cartArray.findIndex(cart => cart.productName = element.productName);
          if (i !== 0) {
            this.cartArray.pop(i, 1);
            localStorage.setItem('cartCount', JSON.stringify(this.cartArray));
          }

        }
      });

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
    console.log(item.count, item);
    if (item.count >= 1) {
      let total = 0;
      this.cartArray.forEach(element => {
        if (element.productID == item.productID) 
        {
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
    }
     this.getTotal();

    // if (item.count > 1) {
    //   var temp = true;
    //   this.cartArray.forEach(element => {
    //     if (element.productID == item.productID) {
    //       element.count = element.count - 1;
    //       console.log("gnjdgg...", element);
    //       temp = false
    //     }
    //   }
    //   );
    //   // if (temp) {
    //   //   item.count = 0;
    //   //   this.cartArray.pop(item);
    //   // }
    //   localStorage.setItem('cartCount', JSON.stringify(this.cartArray));
    //   this.getTotal();

    //   this.getDetails();

    // }
    // else {

    //   this.cartArray = this.cartArray.filter(el => {
    //         return el.productID != item.productID;
    //   });
    //   localStorage.setItem('cartCount', JSON.stringify(this.cartArray));
    //   this.getDetails();

    // }
    // this.count = this.cartArray.reduce(function (count, element) {
    //   return count + element.count;
    // }, 0);
  }
}
