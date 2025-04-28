import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PinboardComponent } from './pages/pinboard/pinboard.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pinboard', component: PinboardComponent },
    { path: 'authenticate', component: AuthComponent },
    { path: 'users', component: UsersComponent }
];
