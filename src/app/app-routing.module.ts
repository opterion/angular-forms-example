import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaOfferComponent } from './pizza-offer-page/pizza-offer.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: PizzaOfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
