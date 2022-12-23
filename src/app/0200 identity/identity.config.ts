//AGREGATE ROOT for module specific variables.

export const IdentityConfig = {
  
  issuer: 'https://localhost:7010',
  clientId: 'angular.client',
  redirectUri: "https://localhost:4200/", 
  postLogoutRedirectUri: "https://localhost:4200/",
  scope: 'openid profile',
  responseType: 'code',
  requireHttps: true,
 }