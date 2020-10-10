import { Component, OnInit } from '@angular/core';

// declare var jquery:any;
// import 'src/assets/js/jquery.min.js';
// declare var tether: any;
// import 'src/assets/js/tether.min.js';
// declare var bootstrap:any;
// import 'src/assets/js/bootstrap.min.js';
// declare var animsition:any;
// import 'src/assets/js/animsition.min.js';
// declare var bootstrapSlider:any;
// import 'src/assets/js/bootstrap-slider.min.js';
// declare var jsonIsotope: any;
// import 'src/assets/js/jquery.isotope.min.js';
// declare var headroom: any;
// import 'src/assets/js/headroom.min.js';
// declare var foodPicky: any;
// import 'src/assets/js/foodpicky.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  City :string;
  constructor() { }

  ngOnInit(): void {
  }

  ColorChangedEventHandler(city:string){
    this.City = city;
  }  
}
