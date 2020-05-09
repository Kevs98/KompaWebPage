import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ConnectService } from './services/connect.service';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonaddComponent } from './components/personadd/personadd.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { RegComponent } from './components/reg/reg.component';
import { ExpedetailsComponent } from './components/expedetails/expedetails.component';
import { BlogComponent } from './components/blog/blog.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonaddComponent,
    InicioComponent,
    InscriptionsComponent,
    SidenavComponent,
    AdminComponent,
    RegComponent,
    ExpedetailsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    FormsModule
  ],
  providers: [ConnectService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
