import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() products: Product[];

  @Output() added = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
   //  this.added.emit(this.parentForm.get('selector').value);
  }

}
