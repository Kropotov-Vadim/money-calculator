import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../main/main.component';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import { ProductCalculatorComponent } from './components/product-calculator/product-calculator.component';
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { ProdcutTableComponent } from './components/prodcut-table/prodcut-table.component';
import { MatTableModule } from "@angular/material/table";


@NgModule({
  declarations: [
    MainComponent,
    ProductTabComponent,
    ProductCalculatorComponent,
    ProdcutTableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSliderModule,
    FormsModule,
    MatTableModule
  ],
})
export class MainModule { }
