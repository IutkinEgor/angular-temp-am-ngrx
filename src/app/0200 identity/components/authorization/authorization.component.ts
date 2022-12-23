import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import * as fromIdenityTypes from '../../types/_index';
import * as fromIdenityStore from '../../store/identity.reducer'
import * as fromAuthorizationAction from '../../store/authorization/authorization.action'
import * as fromAuthorizationSelector from '../../store/authorization/authorization.selector'

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  responseError: any | undefined;
  authorizationForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromIdenityStore.IdentityState>,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue();
  }

  initializeForm(): void {
    this.authorizationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValue(): void {
    //Get state from store
      this.isLoading$ = this.store.pipe(select(fromAuthorizationSelector.loadingSelector));
  }

  onAuthorization():void {
    if (!this.authorizationForm.valid) return;
    const payload: fromIdenityTypes.AuthorizationRequestInterface = {
      email: this.authorizationForm.value.email,
      password: this.authorizationForm.value.password,
    }
    
    //Dispatch new action
    this.store.dispatch(fromAuthorizationAction.authorization({payload}));
  }
}
