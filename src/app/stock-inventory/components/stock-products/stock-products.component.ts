import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Input() parentForm: FormGroup;

  get stocks() {
    return (this.parentForm.get('stock') as FormArray).controls;
  }

  constructor() { }

  ngOnInit() {
  }

}
