import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatererSelectionComponent } from './caterer-selection/caterer-selection.component';
import { CatererComponent } from './caterer/caterer.component';
import { HomeComponent } from './home/home.component';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'caterer', 
    component: CatererComponent,
    children:[
      {
        path:'',
        component:CatererSelectionComponent
      },
      {
        path:'menu',
        component:MenuSelectionComponent
        
      }
    ]  
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
