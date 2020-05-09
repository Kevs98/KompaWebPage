import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonsComponent } from './components/persons/persons.component';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegComponent } from './components/reg/reg.component';
import { ExpedetailsComponent } from './components/expedetails/expedetails.component';
import { BlogComponent } from './components/blog/blog.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'inscriptions', component:InscriptionsComponent },
  { path: 'login', component:AdminComponent},
  { path: 'reg', component: RegComponent },
  { path: 'exped/:id', component: ExpedetailsComponent },
  { path: 'blog', component: BlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
