import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store"

import * as fromAuthorization from "./authorization/authorization.reducer" 

//AGREGATE ROOT for module specific reducres
export interface IdentityState {
    authorization: fromAuthorization.AuthorizationState
}

export const reducers: ActionReducerMap<IdentityState> = {
    authorization: fromAuthorization.reducer
}

export const identityFeatureSelector = createFeatureSelector<
    IdentityState
    >('identity');

