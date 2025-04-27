import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/components/home.component';
import { AuthComponent } from './pages/auth/components/auth.component';
import { PinboardComponent } from './pages/pinboard/pinboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pinboard', component: PinboardComponent },
    { path: 'authenticate', component: AuthComponent }
];
