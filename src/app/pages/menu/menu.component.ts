import { Component, OnInit } from '@angular/core';
import { MenuItemCardComponent } from "../menu-item-card/menu-item-card.component";
import { NgClass, NgFor } from '@angular/common';
import { AddMenuItemComponent } from "../add-menu-item/add-menu-item.component";

@Component({
  selector: 'app-menu',
  imports: [MenuItemCardComponent, NgFor, AddMenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  // constructor(){
  //   this.loadproductInfo();
  // }
  ngOnInit(): void {
    this.loadproductInfo();
  
    console.log(this.listOfProducts);
  }
  constructor(){
    
  }
 public listOfProducts:any[]=[];
 
 loadproductInfo(){
  fetch("http://localhost:8080/menu/get-all")
  .then(res=>res.json())
  .then(data=>{
    this.listOfProducts=data;
    console.log(data);
    console.log(this.listOfProducts);
    
  })
  
  
 }
 
}