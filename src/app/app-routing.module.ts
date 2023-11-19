import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  
  // {
  //   path:'champ'
  //   // , component: ChampComponent
  //   // nếu children mà có thuộc tính component thì trong component phải có router
  //   // nếu k nó sẽ ăn theo component trong app.component.html
  //   , children: [
  //   {path:'index', component: UserComponent}
  // ]},

  {
    path:'',
    component:LayoutClientComponent,
    children:[
      {path:'', component: ProductClientComponent},
      {path:'products', component: ProductClientComponent},
      {path:'about', component: AboutClientComponent}
    ]
  }
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
