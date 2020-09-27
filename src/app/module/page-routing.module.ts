
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/classes/guard/auth-guard';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DashboardComponent } from '../pages/home/dashboard/dashboard.component';
import { DefaultPageComponent } from '../pages/home/default-page/default-page.component';



const routes: Routes = [
    {
        path: 'home',
        component: SidebarComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'default-page',
                component: DefaultPageComponent
            }
           
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
