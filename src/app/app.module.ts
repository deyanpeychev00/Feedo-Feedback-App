// Modules
import {NgModule} from '@angular/core';
import {ModulesExport} from "./export/modules/export-modules";
// Providers
import {ProvidersExport} from "./export/providers/export-providers";
// Components
import {AppComponent} from "./app.component";
import {ComponentsExport} from "./export/components/export-components";
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [...ComponentsExport, HomePageComponent],
  imports: [...ModulesExport],
  providers: [...ProvidersExport],
  bootstrap: [AppComponent]
})

export class AppModule {
}
