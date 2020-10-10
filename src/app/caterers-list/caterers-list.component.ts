import { Component, OnInit } from '@angular/core';
import {ICaterer} from '../models/Caterer'

@Component({
  selector: 'app-caterers-list',
  templateUrl: './caterers-list.component.html',
  styleUrls: ['./caterers-list.component.css']
})
export class CaterersListComponent implements OnInit {

  catererList: ICaterer[] =[];
  constructor() { 
    this.buildCaterersList();
  }
  

  ngOnInit(): void {
  }

  buildCaterersList()
  {
    this.catererList.push(
      {
        CatererId:1,
        CatererName:'Abhiruchi',
        Description:'Abhiruchist',
        CatererImage : '',
        Location:'Bhimavaram',
        ReviewsCount:250        
      }
    )
    

    this.catererList.push(
      {
        CatererId:1,
        CatererName:'Suprabath',
        Description:'Suprabath',
        CatererImage : '',
        Location:'Bhimavaram',
        ReviewsCount:358        
      }
    )

    this.catererList.push(
      {
        CatererId:1,
        CatererName:'Ajantha Caterer',
        Description:'Ajantha Foods',
        CatererImage : '',
        Location:'Bhimavaram',
        ReviewsCount:55        
      }
    )

    this.catererList.push(
      {
        CatererId:1,
        CatererName:'Vijaya Lakshmi Caterer',
        Description:'Foods',
        CatererImage : '',
        Location:'Bhimavaram',
        ReviewsCount:100        
      }
    )
  }

}
