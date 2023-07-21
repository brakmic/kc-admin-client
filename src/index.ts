import { AttackDetection } from '@keycloak/keycloak-admin-client/lib/resources/attackDetection';
import { AuthenticationManagement } from '@keycloak/keycloak-admin-client/lib/resources/authenticationManagement';
import { Cache } from '@keycloak/keycloak-admin-client/lib/resources/cache';
import { ClientPolicies } from '@keycloak/keycloak-admin-client/lib/resources/clientPolicies';
import { ClientScopes } from '@keycloak/keycloak-admin-client/lib/resources/clientScopes';
import { Clients } from '@keycloak/keycloak-admin-client/lib/resources/clients';
import { ConnectionConfig } from '@keycloak/keycloak-admin-client/lib/client';
import { Components } from '@keycloak/keycloak-admin-client/lib/resources/components';
import { Groups } from '@keycloak/keycloak-admin-client/lib/resources/groups';
import { IdentityProviders } from '@keycloak/keycloak-admin-client/lib/resources/identityProviders';
import KeycloakAdminClient from '@keycloak/keycloak-admin-client';
import { Realms } from '@keycloak/keycloak-admin-client/lib/resources/realms';
import { Roles } from '@keycloak/keycloak-admin-client/lib/resources/roles';
import { ServerInfo } from '@keycloak/keycloak-admin-client/lib/resources/serverInfo';
import { Sessions } from '@keycloak/keycloak-admin-client/lib/resources/sessions';
import TokenProvider from '@keycloak/keycloak-admin-client';
import { UserStorageProvider } from '@keycloak/keycloak-admin-client/lib/resources/userStorageProvider';
import { Users } from '@keycloak/keycloak-admin-client/lib/resources/users';
import { WhoAmI } from '@keycloak/keycloak-admin-client/lib/resources/whoAmI';


export default KeycloakAdminClient;

export { 
  AttackDetection,
  Cache,
  ClientPolicies,
  ClientScopes,
  Clients,
  ConnectionConfig,
  Components,
  Groups,
  IdentityProviders,
  Realms,
  Roles,
  ServerInfo,
  Sessions,
  TokenProvider,
  UserStorageProvider,
  Users,
  WhoAmI,
  AuthenticationManagement
};
