import { Component, OnInit } from '@angular/core';
import {ICategory, IFoodItem} from '../models/Menu';
import {MenuData} from '../Data/MenuData'
import { YourMenuComponent } from '../your-menu/your-menu.component';
import {MenuDataService}  from '../menu-data.service'

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  SelectedMenu : ICategory [] =[]
  Categories : ICategory [] 
  menu :  MenuData
  constructor(private menuDataService : MenuDataService) {
    this.menu = new MenuData();
    this.Categories =this.menu.Categories;
   }

  ngOnInit(): void {
    
  }

  addToYourMenu(category:ICategory,foodItem:IFoodItem)
  { 
    if(this.menuDataService.SelectedMenu.filter(s=>s.CategoryId=== category.CategoryId).length>0)
    {
      let cat = this.menuDataService.SelectedMenu.filter(s=>s.CategoryId=== category.CategoryId)[0];
      if(cat.FoodItems.length < cat.MaxCount)
      {
        foodItem.IsAdded = true; 
        cat.FoodItems.push(foodItem);
      }
      else{
        alert("You have already added item in this category. If you want to change food item please remove added item and add another.")
      }
    }
    else{
      foodItem.IsAdded = true;
      this.menuDataService.SelectedMenu.push({CategoryId:category.CategoryId,CategoryName:category.CategoryName,
        CategoryDesc:category.CategoryDesc,MaxCount : category.MaxCount,MenuId :category.MenuId,
        FoodItems : [foodItem]      
      });
    }  
  }

  deleteFromYourMenu(category:ICategory,foodItem:IFoodItem)
  {   
    foodItem.IsAdded = false;
    if(this.menuDataService.SelectedMenu.filter(s=>s.CategoryId===category.CategoryId)[0].FoodItems.length===1){
      this.menuDataService.SelectedMenu = this.menuDataService.SelectedMenu.filter(function( obj ) {
        return obj.CategoryId !== category.CategoryId ;
      });
    }
    else{
      let fooditems = this.menuDataService.SelectedMenu.filter(s=>s.CategoryId===category.CategoryId)[0]
      .FoodItems.filter(s=>s.FoodItemId!==foodItem.FoodItemId);
      this.menuDataService.SelectedMenu.filter(s=>s.CategoryId===category.CategoryId)[0]
      .FoodItems = fooditems;
    }
    
  }

}
