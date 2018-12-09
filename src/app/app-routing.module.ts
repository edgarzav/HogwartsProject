import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { HousesComponent } from "./houses/houses.component"
import { ApplyComponent } from "./apply/apply.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "houses",
    component: HousesComponent
  },
  {
    path: "apply",
    component: ApplyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
