import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ProductComponent } from './Component/product/product.component';
import { CartListComponent } from './Component/cart-list/cart-list.component';


const routes: Routes = ([
  {path:'' ,redirectTo:'dashboard' , pathMatch:'full'},
  {path : 'dashboard',component:DashboardComponent},
  {path : 'product/:id',component:ProductComponent},
  {path : 'cartlist',component:CartListComponent}
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
