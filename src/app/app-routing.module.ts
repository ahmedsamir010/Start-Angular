import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PortoComponent } from './porto/porto.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent,title:"home"},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"portfolio",component:PortoComponent,title:"portfolio"},
  {path:"contact",component:ContactComponent,title:"contact"},
  {path:"**",component:NotFoundComponent,title:"Not Found"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
