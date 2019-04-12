import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaOfferComponent } from './pizza-offer-page/pizza-offer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { SelectedPizzaViewerComponent } from './components/selected-pizza-viewer/selected-pizza-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaOfferComponent,
    CustomerDetailsComponent,
    NavbarComponent,
    PizzaListComponent,
    SelectedPizzaViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
