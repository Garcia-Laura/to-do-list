import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//funciona