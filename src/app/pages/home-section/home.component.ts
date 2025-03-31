import { Component, Input } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  
  imports: [AboutUsComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  test=():string=>{
    return "method";
  }
  dateMsg:string="";
  //users:any[]=[];

  users: any=[];
  constructor(){
    this.users[0]="dinneth";
    this.users[1]="Alex";
    // this.users[0]=
    //   {
    //     name:"Dinneth",
    //     age:10
    //   };
    //   this.users[1]={
    //   name:"Jake",
    //   age:20
    //   }
    
  
  }
 name :string ="Open"
 change_status():void{
  this.name="close";
 }
}
