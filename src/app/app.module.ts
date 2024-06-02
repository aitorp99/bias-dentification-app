import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SpecificStatsComponent } from './specific-stats/specific-stats.component';
import { SourceStatsComponent } from './source-stats/source-stats.component';
import { ChartModule } from 'angular-highcharts';
import { ComparisonStatsComponent } from './comparison-stats/comparison-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInterfaceComponent,
    StatisticsComponent,
    SpecificStatsComponent,
    SourceStatsComponent,
    ComparisonStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
