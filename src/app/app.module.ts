import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
     MatGridListModule, MatListModule, MatMenuModule,
     MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
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
import { TypeAddComponent } from './page/type/type-add/type-add.component';
import { TypeEditComponent } from './page/type/type-edit/type-edit.component';
import { ImgPipe } from './pipe/img.pipe';
const appRoutes: Routes = [
    { path: 'product', component: ProductComponent, canActivate: [IsSignedInGuard], data : { title: 'Produits'} },
    { path: 'menu', component: MenuComponent, canActivate: [IsSignedInGuard], data : { title: 'Menu'} },
    { path: 'type', component: TypeComponent, canActivate: [IsSignedInGuard], data : { title: 'Type'} },
    { path: 'type/add', component: TypeAddComponent, canActivate: [IsSignedInGuard], data : { title: 'Add Type'} },
    { path: 'type/edit/:id', component: TypeEditComponent, canActivate: [IsSignedInGuard], data : { title: 'Edit Type'} },
    { path: 'login', component: LoginComponent, data : { title: 'Login'} },
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
        TypeAddComponent,
        TypeEditComponent,
        ImgPipe,
    ],
    imports: [
        MDBBootstrapModule,
        MatButtonModule,
        HttpClientModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatGridListModule,
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
