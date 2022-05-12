import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';
import { PlantDetailComponent } from './sub-pages/plant-detail/plant-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegistorComponent } from './auth/registor/registor.component';
import { SponserComponent } from './sub-pages/sponser/sponser.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { WindowService } from './services/window/window.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    PlantsComponent,
    ProfileComponent,
    NavbarComponent,
    StatusbarComponent,
    PlantDetailComponent,
    LoginComponent,
    SigninComponent,
    RegistorComponent,
    SponserComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
  providers: [ScreenTrackingService, UserTrackingService, WindowService],
  bootstrap: [AppComponent],
})
export class AppModule {}
