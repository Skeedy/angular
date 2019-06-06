import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatToolbarModule, MatSidenavModule,
    MatListModule, MatMenuModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatProgressSpinnerModule, MatTableModule,
    MatSelectModule, MatAutocompleteModule,
    MatCheckboxModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './page/product/product.component';
import { MenuComponent } from './page/menu/menu.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor} from './class/jwtinterceptor';
import { ErrorInterceptor } from './class/errorinterceptor';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IsSignedInGuard} from './guard/is-signed-in.guard';
import { TypeComponent } from './page/type/type.component';
import { ImgPipe } from './pipe/img.pipe';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { CommandComponent } from './page/command/command.component';
import { RegisterComponent } from './component/register/register.component';
import { PanierComponent } from './page/panier/panier.component';
import { CartRowComponent } from './component/cart-row/cart-row.component';

const appRoutes: Routes = [
    { path: 'product', component: ProductComponent, canActivate: [IsSignedInGuard], data : { title: 'Produits'} },
    { path: 'menu', component: MenuComponent, canActivate: [IsSignedInGuard], data : { title: 'Menu'} },
    { path: 'type', component: TypeComponent, canActivate: [IsSignedInGuard], data : { title: 'Type'} },
    { path: 'command', component: CommandComponent, canActivate: [IsSignedInGuard], data : { title: 'Historique'} },
    { path: 'panier', component: PanierComponent, canActivate: [IsSignedInGuard], data : { title: 'Panier'} },
    { path: 'login', component: LoginComponent, data : { title: 'Login'} },
    { path: 'register', component: RegisterComponent, data : { title: 'Register'} },
    { path: '', redirectTo: '/product', canActivate: [IsSignedInGuard], pathMatch: 'full' },
    { path: '**', component: AppComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        MenuComponent,
        LoginComponent,
        TypeComponent,
        ImgPipe,
        ProductCardComponent,
        CommandComponent,
        RegisterComponent,
        PanierComponent,
        CartRowComponent,
    ],
    imports: [
        MDBBootstrapModule,
        MatButtonModule,
        HttpClientModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatListModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        NgbModule,
        RouterModule.forRoot(appRoutes),
        MDBBootstrapModule.forRoot()
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
