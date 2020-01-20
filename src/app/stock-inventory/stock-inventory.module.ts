import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [StockInventoryComponent],
  imports: [
    // CommonModule,
    // BrowserModule,
    ReactiveFormsModule

  ],
  exports: [StockInventoryComponent],
})
export class StockInventoryModule { }
