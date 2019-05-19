import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule, Routes } from '@angular/router';
import {JwtInterceptor } from './class/jwt-interceptor';
import {ErrorInterceptor } from './class/error-interceptor';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ProfilComponent } from './page/profil/profil.component';

const appRoutes: Routes = [
  { path: 'profil', component: ProfilComponent, data: { title: 'Profil' } },
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
    LoginComponent,
    ProfilComponent
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
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
