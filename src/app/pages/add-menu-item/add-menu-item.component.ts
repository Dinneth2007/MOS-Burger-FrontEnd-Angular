import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-menu-item',
  imports: [FormsModule,NgFor],
  templateUrl: './add-menu-item.component.html',
  styleUrl: './add-menu-item.component.css'
})
export class AddMenuItemComponent {
  
@Input()
 catgory:any=[];
 Item:any={
  name:"",
  description:"",
  price:10,
  category:{id:1},
  stockQuantity:0,
  expirationDate:"",
  isActive:true,
  imageUrl:""
  }

  //constructor injection
  constructor(private http:HttpClient){
    fetch("http://localhost:8080/menu/get-all")
  .then(res=>res.json())
  .then(data=>{
    data.forEach((element: { category: { id: any; }; }) => {
      this.catgory.push(element.category.id);
    });
    
    
  })
  console.log(this.catgory);
  }
addItem(){
  console.log(this.Item);
 this.http.post("http://localhost:8080/menu/add",this.Item,)
 .subscribe(res=>{
  console.log(res);
 })

};

}
