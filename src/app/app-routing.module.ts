import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderItemComponent} from "./order-item.component";
import {ContactComponent} from "./contact.component";

const routes: Routes = [ {path: 'order', component: OrderItemComponent},
  {path: 'contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
