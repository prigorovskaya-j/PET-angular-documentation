import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutProjectPage } from './pages/about-project-page/about-project-page.component';
import { RoutingPage } from './pages/routing-page/routing-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/about-project-page', pathMatch: 'full' },
  { path: 'about-project-page', component: AboutProjectPage, data: { breadcrumb: 'О проекте' } },  
  { path: 'routing-page', component: RoutingPage, data: { breadcrumb: 'Роутинг и навигация' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
