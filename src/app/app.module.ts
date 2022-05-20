import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';


//componentes
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './services/usuario.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
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
