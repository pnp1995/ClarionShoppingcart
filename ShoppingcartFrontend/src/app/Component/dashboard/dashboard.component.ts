import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productArray: any = [];
  count: number = 0;
  cartData: any = [];
  totalamount: number;
  cartArray: any;

  // cart = JSON.parse(localStorage.getItem('cart'));

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('cartCount'))) {
      this.cartData = JSON.parse(localStorage.getItem('cartCount'))
      // this.count = this.cartData.length;

      this.count = this.cartData.reduce(function (count, element) {
        return count + element.count;
      }, 0);
     console.log("dfsg",this.count);
     
    }
    console.log('...', JSON.parse(localStorage.getItem('cartCount')));
    this.productList();
 //   this.cartList();
    this.getDetails();
  }
  productList() {
    // alert("product list ");
    this.productservice.getProduct().subscribe((response: any) => {
      this.productArray = response.result;
      // this.product=this.productArray.result
      console.log("data", this.productArray);
    })
  }
  getDetails() {
    if (JSON.parse(localStorage.getItem('cartCount'))) {
      this.cartData = JSON.parse(localStorage.getItem('cartCount'))
      //this.count = this.cartData.length;
      this.cartArray = JSON.parse(localStorage.getItem('cartCount'))
      this.getTotal();
    }
  }
  addCart(item) {
    this.getDetails();
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

    this.count = this.cartData.reduce(function (count, element) {
      return count + element.count;
    }, 0);
    this.getDetails();

    // this.productservice.addToCart(item).subscribe((result: any) => {
    //   console.log(result);
    // });
  }
  // cartList() {
  //   this.productservice.getCartlist().subscribe((response: any) => {
  //     this.count = response.length;
  //     console.log("cart", this.count);
  //   })
  // }
  getTotal() {
    let total = 0;
    for (var i = 0; i < this.cartData.length; i++) {
      total += this.cartData[i].price * this.cartData[i].count;
      this.totalamount = total;
    }
    console.log(this.totalamount);
    return total;
  }
}
