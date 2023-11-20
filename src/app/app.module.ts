import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // thêm thư viện để sử dụng form
// đây là module cung cấp các phương thức để component gọi API
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserComponent } from './pages/users/user/user.component';
import { AboutClientComponent } from './pages/about-client/about-client.component';
import { ProductClientComponent } from './pages/client/product-client/product-client.component';
import { ProductDetailClientComponent } from './pages/client/product-detail-client/product-detail-client.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product-detail/admin-product-detail.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminCustomersComponent } from './pages/admin/admin-customers/admin-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    ShowValidateComponent,
    UserListComponent,
    UserFormComponent,
    UserComponent,
    AboutClientComponent,
    ProductClientComponent,
    ProductDetailClientComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    AdminProductsComponent,
    AdminProductDetailComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
    DashboardComponent,
    AdminCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
