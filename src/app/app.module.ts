import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {OrderItemComponent} from "./order-item.component";
import {BakeService} from "./services/bake.service";
import {ContactComponent} from "./contact.component";

@NgModule({
  declarations: [
    AppComponent,
    OrderItemComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
