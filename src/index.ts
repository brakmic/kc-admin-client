import KeycloakAdminClient from '@keycloak/keycloak-admin-client';
import { ConnectionConfig } from '@keycloak/keycloak-admin-client/lib/client';
import TokenProvider from '@keycloak/keycloak-admin-client';
import { Users } from '@keycloak/keycloak-admin-client/lib/resources/users';
import { UserStorageProvider } from '@keycloak/keycloak-admin-client/lib/resources/userStorageProvider';
import { Groups } from '@keycloak/keycloak-admin-client/lib/resources/groups';
import { Roles } from '@keycloak/keycloak-admin-client/lib/resources/roles';
import { Clients } from '@keycloak/keycloak-admin-client/lib/resources/clients';
import { Realms } from '@keycloak/keycloak-admin-client/lib/resources/realms';
import { ClientScopes } from '@keycloak/keycloak-admin-client/lib/resources/clientScopes';
import { ClientPolicies } from '@keycloak/keycloak-admin-client/lib/resources/clientPolicies';
import { IdentityProviders } from '@keycloak/keycloak-admin-client/lib/resources/identityProviders';
import { Components } from '@keycloak/keycloak-admin-client/lib/resources/components';
import { ServerInfo } from '@keycloak/keycloak-admin-client/lib/resources/serverInfo';
import { WhoAmI } from '@keycloak/keycloak-admin-client/lib/resources/whoAmI';
import { AttackDetection } from '@keycloak/keycloak-admin-client/lib/resources/attackDetection';
import { Sessions } from '@keycloak/keycloak-admin-client/lib/resources/sessions';
import { AuthenticationManagement } from '@keycloak/keycloak-admin-client/lib/resources/authenticationManagement';
import { Cache } from '@keycloak/keycloak-admin-client/lib/resources/cache';

export { 
  KeycloakAdminClient,
  ConnectionConfig,
  TokenProvider,
  Users, 
  UserStorageProvider, 
  Groups, 
  Roles, 
  Clients, 
  Realms, 
  ClientScopes, 
  ClientPolicies, 
  IdentityProviders, 
  Components, 
  ServerInfo, 
  WhoAmI, 
  AttackDetection, 
  Sessions, 
  AuthenticationManagement, 
  Cache 
};
