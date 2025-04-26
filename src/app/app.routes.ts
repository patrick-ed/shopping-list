import { Routes } from '@angular/router';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { HomeComponent } from './pages/home/components/home.component';
import { AuthComponent } from './pages/auth/components/auth.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shoppinglist', component: ShoppingListComponent},
    {path: 'authenticate', component: AuthComponent}
];
