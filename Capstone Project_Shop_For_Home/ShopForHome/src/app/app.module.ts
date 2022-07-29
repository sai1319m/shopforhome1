import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';

import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AuthGuard } from './authguard';
import { MatInputModule } from '@angular/material/input';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
import { OrdersComponent } from './orders/orders.component';
import { CsvuploadComponent } from './csvupload/csvupload.component';
import { ProfitsComponent } from './profits/profits.component';
import { AdddiscountsComponent } from './adddiscounts/adddiscounts.component';
import { DiscountComponent } from './discount/discount.component';
import { ManageProducts } from './manage_products/manage_products.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageProducts,
    DiscountComponent,
    AdddiscountsComponent,
    UsersComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    AdminComponent,
    PaymentComponent,
    CheckoutComponent,
    UserloginComponent,
    UserregisterComponent,
    AdminloginComponent,
    AdminsignupComponent,
    WishlistComponent,
    SearchComponent,
    OrdersComponent,
    CsvuploadComponent,
    ProfitsComponent,
    AdddiscountsComponent,
    DiscountComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],

  providers: [
    {
      provide: ProductsComponent
    },
    {
      provide: AuthGuard
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
