import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PinboardComponent } from './pages/pinboard/pinboard.component';
import { UsersComponent } from './pages/users/users.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AuthComponent },
    { path: 'pinboard', component: PinboardComponent, canActivate: [authGuard] },
    { path: 'users', component: UsersComponent },
    { path: '**', redirectTo: '' },
];
