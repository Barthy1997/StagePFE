import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { GestionComponent } from 'app/pages/gestion/gestion.component';
import { ConnectionComponent } from 'app/Authentification/connection/connection.component';
import { RegisterClientComponent } from 'app/Authentification/register-client/register-client.component';
import { GestionCompteComponent } from 'app/ModuleGestion/gestion-compte/gestion-compte.component';
import { RegisterCommercialComponent } from 'app/Authentification/register-commercial/register-commercial.component';
import { GestionCommercialComponent } from 'app/ModuleGestion/gestion-commercial/gestion-commercial.component';
import { GestionArticleComponent } from 'app/ModuleGestion/gestion-article/gestion-article.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'user',             component: UserComponent },
    { path: 'table',            component: TableComponent },
    { path: 'typography',       component: TypographyComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'Catalogue',        component: GestionArticleComponent },
    { path: 'Gestion',          component: GestionComponent },
    { path: 'maps',             component: MapsComponent },
    { path: 'inscripClient',    component: RegisterClientComponent },
    { path: 'inscripCommercial',component: RegisterCommercialComponent },
    { path: 'Compte',           component: GestionCompteComponent },
    { path: 'CompteCommercial', component: GestionCommercialComponent },
    { path: 'notifications',    component: NotificationsComponent },
    { path: 'upgrade',          component: UpgradeComponent }
];
