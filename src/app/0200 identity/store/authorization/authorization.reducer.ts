import { Action, createReducer, on } from "@ngrx/store";

import * as fromAuthorizationAction from './authorization.action'

export interface AuthorizationState {
    loading: boolean
}

const initialState: AuthorizationState = {
    loading: false
}

const AuthorizationReducer = createReducer(
    initialState, 
    on(fromAuthorizationAction.authorization, (state, { payload: AuthorizationRequestInterface }): AuthorizationState => ({
        ...state,
        loading: true
        })
    ),
    on(fromAuthorizationAction.authorizationSuccess, (state): AuthorizationState => ({
        ...state,
        loading: false
        })
    ),
    on(fromAuthorizationAction.authorizationFailure, (state): AuthorizationState => ({
        ...state,
        loading: false
        })
    ),
);

export function reducer(state = initialState, action: Action){
    return AuthorizationReducer(state, action);
}

export const getAuthorizationLoading = (state: AuthorizationState) => state.loading;