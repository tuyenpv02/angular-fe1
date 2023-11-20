import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { ProductClientComponent } from './pages/client/product-client/product-client.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { AboutClientComponent } from './pages/about-client/about-client.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product-detail/admin-product-detail.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';
import { AdminCustomersComponent } from './pages/admin/admin-customers/admin-customers.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutClientComponent,
    children:[
      // {path:'', redirectTo: 'home', pathMatch:'full'},
      {path:'', component: HomeComponent},
      {path:'products', component: ProductClientComponent},
      {path:'about', component: AboutClientComponent}
    ]
  },
  {
    path:'admin',
    component:LayoutAdminComponent,
    children:[
      {path:'',redirectTo:'dashboard', pathMatch:'full'},
      {path:'dashboard',component:TableComponent},
      {path:'products',component:AdminProductsComponent},
      {path:'products/detail/:id',component:AdminProductDetailComponent},
      {path:'products/create',component:AdminProductAddComponent},
      {path:'products/edti/:id',component:AdminProductEditComponent},
      {path:'customers',component:AdminCustomersComponent},
      
    ]
  },
  {
    path:'**',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
