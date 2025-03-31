import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { HomeComponent } from "./pages/home-section/home.component";
import { initFlowbite } from 'flowbite';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent,PlaceOrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'MOSBurger';
}
