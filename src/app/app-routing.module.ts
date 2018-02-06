import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsObj} from "./export/components/export-components-obj";

const routes: Routes = [
  {path: '', component: ComponentsObj.HomePage},
  {path: 'register', component: ComponentsObj.RegisterPage},
  {path: 'login', component: ComponentsObj.LoginPage},
  {path: 'my-profile', component: ComponentsObj.MyProfile},
  {path: 'my-profile-refresh', redirectTo: 'my-profile', pathMatch: 'full'},
  {path: 'search', component: ComponentsObj.SearchUsers},
  {path: 'ask/:username', component: ComponentsObj.SendQuestion}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
