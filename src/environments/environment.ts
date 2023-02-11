import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'abp-sakai',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44396',  
    redirectUri: baseUrl,
    clientId: 'Realstar_App',
    responseType: 'code',
    scope: 'offline_access Realstar',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44396',
      rootNamespace: 'Realstar',
    },
  },
  localization: {
    defaultResourceName: 'abp-sakai',
  }
} as Environment;