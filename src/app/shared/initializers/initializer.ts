import { KeycloakEvent, KeycloakEventType, KeycloakService } from 'keycloak-angular';

const checkTokenExpire = (keycloak: KeycloakService) => {
  keycloak.keycloakEvents$.subscribe(({type}: KeycloakEvent) => {
    const {OnTokenExpired, OnAuthRefreshError} = KeycloakEventType;
    switch (type) {
      case OnAuthRefreshError:
        keycloak.logout();
        break;
      case OnTokenExpired:
        keycloak.updateToken();
        break;
      default:
        break;
    }
  });
};

export function initializer(
  keycloak: KeycloakService,
): () => Promise<boolean> {
  checkTokenExpire(keycloak);

  return (): Promise<boolean> => (
    keycloak.init({
      config: {
        realm: 'intabia-test',
        url: 'https://keycloak.intabia.ru/',
        clientId: 'wikitabia-web-app'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      }
    })
  );
}
