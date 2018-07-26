import { Security, ImplicitCallback } from '@okta/okta-react';

const OktaConfig = {
  issuer: 'https://dev-282337.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{clientId}'
}

export default OktaConfig;