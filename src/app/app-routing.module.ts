import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistorComponent } from './auth/registor/registor.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PlantDetailComponent } from './sub-pages/plant-detail/plant-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigninComponent },
  { path: 'registor', component: RegistorComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'plants/:id', component: PlantDetailComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'profile', component: ProfileComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
