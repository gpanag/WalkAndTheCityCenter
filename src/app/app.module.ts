import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select'; 
import { MatMenuModule } from '@angular/material/menu'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MapComponent } from './map/map.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './app.reuse.startegy';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports:      [
     BrowserModule, AppRoutingModule, FormsModule, FlexLayoutModule, BrowserAnimationsModule,
     MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatSelectModule,
     MatMenuModule, MatProgressSpinnerModule
   ],
  declarations: [ AppComponent, MapComponent, AboutUsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }],
})
export class AppModule { }
