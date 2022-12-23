import { createAction, props } from '@ngrx/store';
import { AuthorizationRequestInterface } from '../../types/authorization-request.interface';

export enum ActionType {
    AUTHORIZATION = '[200 Identity] Authorization',
    AUTHORIZATION_SUCCESS = '[200 Identity] Authorization success',
    AUTHORIZATION_FAILURE = '[200 Identity] Authorization failure'
}

 
export const authorization = createAction(
    ActionType.AUTHORIZATION, 
    props<{ payload: AuthorizationRequestInterface }>()
);

export const authorizationSuccess = createAction(
    ActionType.AUTHORIZATION_SUCCESS,
    props<{ payload: string }>()
);

export const authorizationFailure = createAction(
    ActionType.AUTHORIZATION_FAILURE,
    props<{ payload: any }>()
);