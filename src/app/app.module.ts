import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { SpecificStatsComponent } from './specific-stats/specific-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInterfaceComponent,
    StatisticsComponent,
    SpecificStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
