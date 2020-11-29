import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PformComponent } from './product/pform.component';
import { FormsModule } from '@angular/forms';
import { PlistComponent } from './product/plist.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,PformComponent,PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
