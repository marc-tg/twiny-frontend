import { Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: AuthPageComponent},
    {path: 'home', component: HomeComponent},

];
