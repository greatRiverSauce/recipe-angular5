import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';

const routes:Routes = [
  {path: '', redirectTo:'./dashboard', pathMatch:'full'},
  {path: 'heroes', component:HeroesComponent},
  {path: 'heroes/:id', component:HeroDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component:NotFoundComponent}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
