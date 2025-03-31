import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  imports: [],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent  {
  //Similar to constructor
  @Input()
  public item :any;
  constructor(){
    console.log(this.item);
  }
}
