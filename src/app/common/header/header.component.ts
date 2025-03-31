import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   dateMsg:string="";
  constructor(){
    
    setInterval(()=>{
      let currentDate= new Date();
    this.dateMsg=currentDate.toDateString() +" "+ currentDate.toLocaleTimeString();
    },1000);
  }
}
