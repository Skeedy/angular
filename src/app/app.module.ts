import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule,
   MatListModule,
   MatCardModule,
   MatInputModule,
   MatFormFieldModule,
   MatMenuModule,
   MatToolbarModule,
   MatSidenavModule,
   MatButtonModule,
  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './page/product/product.component';
import { MenuComponent } from './page/menu/menu.component';
import { LoginComponent } from './page/login/login.component';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent, data: { title: 'Produits' } },
  { path: 'login', component: LoginComponent, data: { title: 'Connexion' } },
  { path: 'menu', component: MenuComponent, data: { title: 'Menu' } },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
