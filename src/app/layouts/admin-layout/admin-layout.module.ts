import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { VilleComponent } from '../../ville/ville.component';
import { TypeCompteComponent } from '../../typecompte/typecompte.component';
import { RegionComponent } from '../../region/region.component';
import { ProfilComponent } from '../../profil/profil.component';
import { EtablissementComponent } from '../../etablissement/etablissement.component';
import { EmployeComponent } from '../../employe/employe.component';
import { CompteComponent } from '../../compte/compte.component';
import { EtudiantComponent } from '../../etudiant/etudiant.component';
import { AttestationComponent } from '../../attestation/attestation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    VilleComponent,
    EtudiantComponent,
    TypeCompteComponent,
    RegionComponent,
    ProfilComponent,
    EtablissementComponent,
    EmployeComponent,
    CompteComponent,
    AttestationComponent
  ]
})

export class AdminLayoutModule {}
