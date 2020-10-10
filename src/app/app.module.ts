import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationComponent } from './location/location.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {Router,ActivatedRoute,ParamMap, Routes, RouterModule} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { CatererComponent } from './caterer/caterer.component';
import {CaterHeaderComponent} from './cater-header/cater-header.component';
import { CaterersListComponent } from './caterers-list/caterers-list.component';
import { CaterFooterComponent } from './cater-footer/cater-footer.component';
import { CatererSelectionComponent } from './caterer-selection/caterer-selection.component';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { YourMenuComponent } from './your-menu/your-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    CatererComponent,
    CaterHeaderComponent,
    CaterersListComponent,
    CaterFooterComponent,
    CatererSelectionComponent,
    MenuSelectionComponent,
    MenuListComponent,
    YourMenuComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})

export class AppModule {   
  
}
