import { Injectable } from '@angular/core';
import {ICategory, IFoodItem} from './models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  SelectedMenu : ICategory [] =[]
  constructor() { }
}
