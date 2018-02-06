// Modules
import {NgModule} from '@angular/core';
import {ModulesExport} from "./export/modules/export-modules";
// Providers
import {ProvidersExport} from "./export/providers/export-providers";
// Components
import {AppComponent} from "./app.component";
import {ComponentsExport} from "./export/components/export-components";
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';
import { QuestionsServiceService } from './services/questions-service/questions-service.service';
import { SingleQuestionComponent } from './components/single-question/single-question.component';
import { SingleUserListComponent } from './components/single-user-list/single-user-list.component';


@NgModule({
  declarations: [...ComponentsExport, HomePageComponent, MyProfileComponent, SearchUsersComponent, PageNotFoundComponent, SendQuestionComponent, SingleQuestionComponent, SingleUserListComponent],
  imports: [...ModulesExport],
  providers: [...ProvidersExport, QuestionsServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
