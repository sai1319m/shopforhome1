import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './authguard';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
import { OrdersComponent } from './orders/orders.component';
import { CsvuploadComponent } from './csvupload/csvupload.component';
import { ProfitsComponent } from './profits/profits.component';
import { AdddiscountsComponent } from './adddiscounts/adddiscounts.component';
import { DiscountComponent } from './discount/discount.component';
import { ManageProducts } from './manage_products/manage_products.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminsignup', component: AdminsignupComponent },
  { path: 'profits', component: ProfitsComponent },
  {path:"manage_products",component:ManageProducts},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'userregister', component: UserregisterComponent },
  {path:'wishlist',component:WishlistComponent},
  {path:'search/:term',component:SearchComponent},
  {path:'orders',component:OrdersComponent},
  {path:'csvupload',component:CsvuploadComponent},
  {path:'adddiscount',component:AdddiscountsComponent},
  {path:'discount',component:DiscountComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
