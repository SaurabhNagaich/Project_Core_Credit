import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usercomponent/login/login.component';
import { RegisterComponent } from './usercomponent/register/register.component';
import { HeaderComponent } from './usercomponent/header/header.component';
import { FooterComponent } from './usercomponent/footer/footer.component';
import { SidenavComponent } from './usercomponent/sidenav/sidenav.component';
import { DashboardComponent } from './usercomponent/dashboard/dashboard.component';
import { RoledashboardComponent } from './rolecomponents/roledashboard/roledashboard.component';
import { AddroleComponent } from './rolecomponents/addrole/addrole.component';
import { UpdateroleComponent } from './rolecomponents/updaterole/updaterole.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DashboardComponent,
    RoledashboardComponent,
    AddroleComponent,
    UpdateroleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
