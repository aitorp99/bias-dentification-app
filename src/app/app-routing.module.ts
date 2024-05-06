import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SpecificStatsComponent } from './specific-stats/specific-stats.component';
import { SourceStatsComponent } from './source-stats/source-stats.component';

const routes: Routes = [
  { path: '', component: MainInterfaceComponent },
  { path: 'stats', component: StatisticsComponent },
  { path: 'models/:modelName', component: SpecificStatsComponent },
  { path: 'sources/:sourcelName', component: SourceStatsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
