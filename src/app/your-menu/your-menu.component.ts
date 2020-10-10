import { Component, OnInit,Input } from '@angular/core';
import { ICategory } from '../models/Menu';
import {MenuDataService} from '../menu-data.service';

@Component({
  selector: 'app-your-menu',
  templateUrl: './your-menu.component.html',
  styleUrls: ['./your-menu.component.css']
})
export class YourMenuComponent implements OnInit {
 
  Quantity : number
  Total: number

  get SelectedMenu() : ICategory [] {
    return this.menuDataService.SelectedMenu!=undefined?
      this.menuDataService.SelectedMenu:[];
  }
  set SelectedMenu(value: ICategory [])
  {
    this.SelectedMenu  = value;
  }
  
  constructor(private menuDataService : MenuDataService) {
     
   }

   QuantityChange()
   {
     this.Total = this.Quantity *120;
   }

  ngOnInit(): void {
  }

}
