import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsObj} from "./export/components/export-components-obj";

const routes: Routes = [
  {path: '', component: ComponentsObj.HomePage},
  {path: 'register', component: ComponentsObj.RegisterPage},
  {path: 'login', component: ComponentsObj.LoginPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
