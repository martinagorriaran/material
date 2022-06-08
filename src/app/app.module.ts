import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';


//componentes
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './services/usuario.service';
import { InversionesComponent } from './dashboard/inversiones/inversiones.component';
import { PagosComponent } from './dashboard/pagos/pagos.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InversionesComponent,
    PagosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
   
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
