import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

//App Modules
import { SharedModule } from './0100 shared/shared.module';
import { IdentityModule } from './0200 identity/identity.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //NGRX
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),

    //App Modules default
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //App Modules
    SharedModule,
    IdentityModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
