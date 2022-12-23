import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";

import * as fromAuthorizationAction from '../authorization/authorization.action' 

@Injectable()
export class AuthorizationEffects {
    
    constructor(private actions$: Actions, private authService: AuthService){}

    authorization$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuthorizationAction.authorization),
        switchMap(({payload}) => this.authService.authRequest(payload).pipe(
            map(payload =>  fromAuthorizationAction.authorizationSuccess({payload})),
            catchError(error => of(fromAuthorizationAction.authorizationFailure(error)))
        ))
        )
    );

}
