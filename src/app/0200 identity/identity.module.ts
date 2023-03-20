import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//App modules
import { SharedModule } from '../0100 shared/shared.module';

//App components
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { CallbackComponent } from './components/callback/callback.component';

//App reducer
import { reducers } from './store/identity.reducer';

//App effects
import { AuthorizationEffects } from './store/authorization/authorization.effect';

//App services
import { AuthService } from './services/auth.service';






@NgModule({
  declarations: [
    AuthorizationComponent,
    CallbackComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('identity', reducers),
    EffectsModule.forFeature(
      [
        AuthorizationEffects
      ]
    )
  ],
  providers: [
    AuthService
  ]
  
})
export class IdentityModule { }
