import { Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {path: '', component: AuthPageComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},

];
