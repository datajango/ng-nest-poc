import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { MdcModule } from '../mdc/mdc.module';

@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,    
    OrdersRoutingModule,
    MdcModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class OrdersModule { }
