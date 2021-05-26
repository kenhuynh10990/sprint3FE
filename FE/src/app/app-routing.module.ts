import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu/menu.component';
import {ProductDetailComponent} from './product-detail/product-detail/product-detail.component';


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'product-detail/:productId', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
