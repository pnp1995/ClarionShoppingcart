import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { DataServiceService } from 'src/app/Service/DataService/data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productidArray: any = [];
  count;
  cartData: any = [];
  totalamount: number;
  cartArray: any;
  showLess_More : string = "SEE LESS...";
  paasValueOn_SeeMoreBtn : Boolean = false;
  constructor(private productservice: ProductService, private route: ActivatedRoute, private dataService:DataServiceService) { }
  id;
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id;
      let id = data
    });
    this.viewProductbyId();
    if (JSON.parse(localStorage.getItem('cartCount'))) {
      this.cartData = JSON.parse(localStorage.getItem('cartCount'))
    }
    // this.count = this.cartData.reduce(function (count, element) {
    //   return count + element.count;
    // }, 0);

  }
  viewProductbyId() {
    this.productservice.getProductbyid(this.id).subscribe((Response: any) => {
      this.productidArray = Response.result;
      console.log("DATATTATA", this.productidArray);
      console.log("productbyid....", Response);

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
    // this.count = this.cartData.reduce(function (count, element) {
    //   return count + element.count;
    // }, 0);
    // this.getDetails();
    this.dataService.changeMessage({"asdsd":'asdsd'});

    
   }

  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip()
  // })

  showMore(data:boolean){
    console.log(data);
    if(data){
      // $("#dots").css('display', 'none');
      $("#more").css('display', 'inline');
      this.showLess_More = "SEE LESS ...";
      this.paasValueOn_SeeMoreBtn = false;
    }else{
      // $("#dots").css('display', 'inline');
      $("#more").css('display', 'none');
      this.showLess_More = "SEE MORE...";
      this.paasValueOn_SeeMoreBtn = true; ;
    }
  }
}
