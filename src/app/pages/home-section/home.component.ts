import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
  selector: 'app-home',
  imports: [AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 name :string ="Open"
 change_status():void{
  this.name="close";
 }
}
