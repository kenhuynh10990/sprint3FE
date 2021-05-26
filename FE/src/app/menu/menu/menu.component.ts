import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../service/food.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  productList = new Array<Product>();

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.foodService.getAllProduct().subscribe(data => {
      this.productList = data;
    });
  }
}
