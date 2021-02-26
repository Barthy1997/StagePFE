import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from '@angular/common/http';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ConnectionComponent } from './Authentification/connection/connection.component';
import { RegisterClientComponent } from './Authentification/register-client/register-client.component';
import { RegisterCommercialComponent } from './Authentification/register-commercial/register-commercial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionCompteComponent } from './ModuleGestion/gestion-compte/gestion-compte.component';
import { RecherchePipe } from './Pipe/recherche.pipe';
import { ListePipe } from './Pipe/liste.pipe';
import { GestionCommercialComponent } from './ModuleGestion/gestion-commercial/gestion-commercial.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GestionComponent,
    ConnectionComponent,
    RegisterClientComponent,
    RegisterCommercialComponent,
    GestionCompteComponent,
    RecherchePipe,
    ListePipe,
    GestionCommercialComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
