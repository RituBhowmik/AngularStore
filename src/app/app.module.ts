import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
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
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { WishlistComponent } from './wishlist/wishlist.component';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmPaymentDialog } from './payment/payment.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { OrdersComponent } from './orders/orders.component';





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
    OrdersComponent,



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
      { path: 'orders', component: OrdersComponent},
      { path: 'orderConfirmed', component: OrderConfirmedComponent}
    ]),
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
