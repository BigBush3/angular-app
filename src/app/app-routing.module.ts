import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { MainComponent } from './components/main/main.component';
import { OrderCompleteComponent } from './components/order-complete/order-complete.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'constructor', component: ConstructorComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-complete', component: OrderCompleteComponent },
  { path: 'order-confirm', component: OrderConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
