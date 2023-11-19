import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/users/user/user.component';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { AboutClientComponent } from './pages/about-client/about-client.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';

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
      {path:'',redirectTo:'users', pathMatch:'full'},
      {path:'dashboard',component:NotFoundComponent},
      {path:'users',component:UserComponent},
      {path:'products',component:ProductClientComponent},
      {path:'table',component:TableComponent},
      
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
