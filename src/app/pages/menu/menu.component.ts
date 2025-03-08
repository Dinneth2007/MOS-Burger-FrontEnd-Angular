import { Component, OnInit } from '@angular/core';
import { MenuItemCardComponent } from "../menu-item-card/menu-item-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [MenuItemCardComponent,NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  ngOnInit(): void {
    this.loadproductInfo();
  }
  listOfProducts:any=[];
 loadproductInfo(){
  fetch("http://localhost:8080/menu/get-all")
  .then(res=>res.json())
  .then(data=>{
    this.listOfProducts=data;
    console.log("running method")
    console.log(this.listOfProducts);
  })
 }
}
