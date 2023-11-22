import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { ProductClientComponent } from './pages/client/product-client/product-client.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { AboutClientComponent } from './pages/about-client/about-client.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { AdminProductsComponent } from './pages/admin/product/admin-products/admin-products.component';
import { AdminProductDetailComponent } from './pages/admin/product/admin-product-detail/admin-product-detail.component';
import { AdminProductAddComponent } from './pages/admin/product/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/product/admin-product-edit/admin-product-edit.component';
import { AdminCustomersComponent } from './pages/admin/admin-customers/admin-customers.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { canAccessAdminGuard } from './guards/can-access-admin.guard';

const routes: Routes = [
  {
    path:'',
    component:LayoutClientComponent,
    children:[
      {path:'', redirectTo: 'home', pathMatch:'full'},
      {path:'home', component: HomeComponent},
      {path:'products', component: ProductClientComponent},
      {path:'about', component: AboutClientComponent}
    ]
  },
  {
    path:'admin',
    component:LayoutAdminComponent,
    canActivate: [canAccessAdminGuard], // chặn login
    children:[
      {path:'',redirectTo:'dashboard', pathMatch:'full'},
      {path:'dashboard',component:TableComponent},
      {path:'products',component:AdminProductsComponent},
      {path:'products/detail/:id',component:AdminProductDetailComponent},
      {path:'products/create',component:AdminProductAddComponent},
      {path:'products/edit/:id',component:AdminProductEditComponent},
      {path:'customers',component:AdminCustomersComponent},
    ]
  },
  {
    path:'auth',
    children:[
      {
        path:'login',
        component: LoginComponent
      }
    ]
  },
  {
    path:'**',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
