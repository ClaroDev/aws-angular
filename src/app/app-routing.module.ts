import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { DetailsViewComponent } from './details-view/details-view.component';


const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'details/:id', component: DetailsViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
