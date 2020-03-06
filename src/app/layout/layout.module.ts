import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent, ProductComponent, AddProductComponent, EditProductComponent, UserProfileComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
