import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-section/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"menu",
        component:MenuComponent
    },
    {
        path:"place-order",
        component:PlaceOrderComponent
    }
];
