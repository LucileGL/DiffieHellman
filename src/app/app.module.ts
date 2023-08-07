import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { CoreModule } from './core/core.module';
import { AccueilComponent } from './accueil/accueil.component';
import { PageVocabularyComponent } from './page-vocabulary/page-vocabulary.component';
import { PageConcernedComponent } from './page-concerned/page-concerned.component';
import { PageActorsComponent } from './page-actors/page-actors.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { PageTestComponent } from './page-test/page-test.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { SharedModule } from "./shared/shared.module";
import { CompCarouselComponent } from './composants/comp-carousel/comp-carousel.component';
import { CompCollapseComponent } from './composants/comp-collapse/comp-collapse.component';
import { ComposantModule } from './composants/composants.module';
import { FormModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        UiComponent,
        AccueilComponent,
        PageVocabularyComponent,
        PageConcernedComponent,
        PageActorsComponent,
        PageTestComponent,
        PageServicesComponent,
        CompCarouselComponent,
        CompCollapseComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [],
    imports: [
        CoreModule,
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        MdbModalModule,
        SharedModule,
        ComposantModule,
        FormsModule
    ]
})
export class AppModule { }
