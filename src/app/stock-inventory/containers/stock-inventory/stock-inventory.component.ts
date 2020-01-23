import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      price: 2800,
      name: 'MacBook Pro'
    },
    {
      id: 2,
      price: 50,
      name: 'USB-C Adaptor'
    },
    {
      id: 3,
      price: 400,
      name: 'iPod'
    },
    {
      id: 4,
      price: 900,
      name: 'iPhone'
    },
    {
      id: 5,
      price: 600,
      name: 'Apple Watch'
    }
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([
      this.createStock({product_id: 1, quantity: 10}),
      this.createStock({product_id: 2, quantity: 50})
    ])
  });

  constructor() {}

  ngOnInit() {}

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(stock.product_id || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
