import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HerComponent } from './menu/her/her.component';
import { HisComponent } from './menu/his/his.component';
import { KidsComponent } from './menu/kids/kids.component';
import { HomeStoreComponent } from './menu/home-store/home-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { WishlistComponent } from './wishlist/wishlist.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmPaymentDialog } from './payment/payment.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HerComponent,
    HisComponent,
    KidsComponent,
    HomeStoreComponent,
    CartComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    LoginComponent,
    WishlistComponent,
    CheckoutComponent,
    ConfirmPaymentDialog,
    OrderConfirmedComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,



    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'her', component: HerComponent },
      { path: 'his', component: HisComponent },
      { path: 'kids', component: KidsComponent },
      { path: 'homeStore', component: HomeStoreComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'checkout', component: CheckoutComponent},

      { path: 'orderConfirmed', component: OrderConfirmedComponent}
    ]),
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
