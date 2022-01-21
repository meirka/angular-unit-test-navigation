import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScoreComponent} from "./score/score.component";
import {PressReleaseComponent} from "./press-release/press-release.component";

const routes: Routes = [
  {path: '', redirectTo: '/press', pathMatch: 'full'},
  {path: 'score', component: ScoreComponent},
  {path: 'press', component: PressReleaseComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
