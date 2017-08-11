import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RankingsComponent } from './rankings/rankings.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'rankings', component: RankingsComponent},
  { path: 'player', component: PlayerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RankingsComponent,
    PlayerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
