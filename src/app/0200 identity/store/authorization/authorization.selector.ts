import { createSelector } from "@ngrx/store";

import * as fromIdentityReducer from "../identity.reducer";
import * as fromAuthorizationReducer from './authorization.reducer'

export const authorizationSelector =  createSelector(
    fromIdentityReducer.identityFeatureSelector,
    (state: fromIdentityReducer.IdentityState) => state.authorization
)

export const loadingSelector =  createSelector(
    authorizationSelector, fromAuthorizationReducer.getAuthorizationLoading
)