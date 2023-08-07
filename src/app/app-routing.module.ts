import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageActorsComponent } from './page-actors/page-actors.component';
import { PageConcernedComponent } from './page-concerned/page-concerned.component';
import { PageVocabularyComponent } from './page-vocabulary/page-vocabulary.component';
import { PageTestComponent } from './page-test/page-test.component';

const routes: Routes = [

  {path: 'accueil', component: AccueilComponent},
  {path: 'services', component: PageServicesComponent},
  {path: 'vocabulary', component: PageVocabularyComponent},
  {path: 'actors', component: PageActorsComponent},
  {path: 'be-concerned', component: PageConcernedComponent},
  {path: 'test', component: PageTestComponent},
  {path: '**', component: AccueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
