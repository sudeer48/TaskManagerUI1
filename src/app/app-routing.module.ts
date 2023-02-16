import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './Shared/authentication.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  //{path:'home',component:HomeComponent},
  { path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule),canActivate:[AuthenticationGuard]},
  { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
