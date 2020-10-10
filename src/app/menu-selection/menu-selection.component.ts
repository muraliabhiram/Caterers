import { Component, OnInit, Testability } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router'

declare var jquery:any;
import 'src/assets/js/jquery.min.js';
declare var tether: any;
import 'src/assets/js/tether.min.js';
declare var bootstrap:any;
import 'src/assets/js/bootstrap.min.js';
declare var animsition:any;
import 'src/assets/js/animsition.min.js';
declare var slider:any;
import 'src/assets/js/bootstrap-slider.min.js';
declare var jsonIsotope: any;
import 'src/assets/js/jquery.isotope.min.js';
declare var headroom: any;
import 'src/assets/js/headroom.js';
declare const TestCustom: any;
import 'src/assets/js/foodpicky.js';

@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrls: ['./menu-selection.component.css']
})
export class MenuSelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  callFun()
  {
    TestCustom();
    alert('Hi Test');
  }

}
