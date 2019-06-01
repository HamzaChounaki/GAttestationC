import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { VilleService } from './ville/ville.service';
import { RegionService } from './region/region.service';
import { ProfilService } from './profil/profil.service';
import { TypeService } from './type/type.service';
import { EtablissementService } from './etablissement/etablissement.service';
import { EtudiantService } from './etudiant/etudiant.service';
import { CompteService } from './compte/compte.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

  ],
  providers: [VilleService,RegionService,ProfilService,TypeService,EtablissementService,EtudiantService,CompteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
