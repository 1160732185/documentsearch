import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {TypedetailComponent} from './typedetail/typedetail.component';
import {AdsearchComponent} from './adsearch/adsearch.component';


const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'main', component: MainpageComponent },
  { path: 'typedetail/:id', component: TypedetailComponent },
  { path: 'adsearch', component: AdsearchComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
