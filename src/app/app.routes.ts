import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-section/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"menu",
        component:MenuComponent
    }
];
