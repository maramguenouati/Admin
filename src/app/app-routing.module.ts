import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ProfiladminComponent } from './profiladmin/profiladmin.component';

const routes: Routes = [
 {path:"dashbord",component:AdminDashbordComponent},
 {path:"signin",component:AdminAuthComponent},
 {path:"profiladmin",component:ProfiladminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
