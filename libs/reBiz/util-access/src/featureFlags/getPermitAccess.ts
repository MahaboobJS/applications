import { AccessRole, AccessAction } from '@prisma/client';

import { env } from '@ruyyaan/reBiz/util-env';

import { hasOrgRole } from '../accessChecks/hasOrgRole';

import { Access } from './types';

const isDebugEnabled = env.NEXT_PUBLIC_ENABLE_PERMIT_ACCESS_LOGS === 'true';

export const getPermitAccess = (userRoles: AccessRole[]): Access['permit'] => {
  const isIssuer = hasOrgRole(AccessAction.WORKFLOW_CREATE_PERMIT, userRoles);
  const isReceiver = hasOrgRole(AccessAction.WORKFLOW_CREATE_PERMIT, userRoles);
  const isGasTester = hasOrgRole(AccessAction.WORKFLOW_ADD_PRE_WORK_GAS_RESULTS, userRoles);
  const isPreWorkGasTester = hasOrgRole(AccessAction.WORKFLOW_ROLE_PRE_WORK_GAS_TESTER, userRoles);
  const isInterimWorkGasTester = hasOrgRole(
    AccessAction.WORKFLOW_ROLE_INTERIM_WORK_GAS_TESTER,
    userRoles
  );
  const isPostWorkGasTester = hasOrgRole(
    AccessAction.WORKFLOW_ROLE_POST_WORK_GAS_TESTER,
    userRoles
  );

  const canCreatePermit = hasOrgRole(AccessAction.WORKFLOW_CREATE_PERMIT, userRoles);
  const canReadPermit = hasOrgRole(AccessAction.WORKFLOW_READ_PERMIT, userRoles);

  const permitAccess: Access['permit'] = {
    read: canReadPermit,
    create: canCreatePermit,
    issuer: isIssuer,
    receiver: isReceiver,
    gasTester: isGasTester,
    preWorkGasTester: isPreWorkGasTester,
    interimWorkGasTester: isInterimWorkGasTester,
    postWorkGasTester: isPostWorkGasTester,
  };

  if (isDebugEnabled) {
    permitAccess.logs = debugPermitAccess(permitAccess);
  }

  return permitAccess;
};

const debugPermitAccess = (permitAccess: Access['permit']): string[] => {
  const logMessages: string[] = [];
  const logAccess = (
    accessType: keyof Access['permit'],
    hasAccess: boolean,
    accessAction: string
  ) => {
    if (hasAccess) {
      logMessages.push(`Access granted for ${accessType}`);
    } else {
      logMessages.push(
        `Access denied for ${accessType} due to missing access action: ${accessAction}`
      );
    }
  };

  logAccess('read', permitAccess.read, AccessAction.WORKFLOW_READ_PERMIT);
  logAccess('create', permitAccess.create, AccessAction.WORKFLOW_CREATE_PERMIT);
  logAccess('issuer', permitAccess.issuer, AccessAction.WORKFLOW_CREATE_PERMIT);
  logAccess('receiver', permitAccess.receiver, AccessAction.WORKFLOW_CREATE_PERMIT);
  logAccess('gasTester', permitAccess.gasTester, AccessAction.WORKFLOW_ADD_PRE_WORK_GAS_RESULTS);
  logAccess(
    'preWorkGasTester',
    permitAccess.preWorkGasTester,
    AccessAction.WORKFLOW_ROLE_PRE_WORK_GAS_TESTER
  );
  logAccess(
    'interimWorkGasTester',
    permitAccess.interimWorkGasTester,
    AccessAction.WORKFLOW_ROLE_INTERIM_WORK_GAS_TESTER
  );
  logAccess(
    'postWorkGasTester',
    permitAccess.postWorkGasTester,
    AccessAction.WORKFLOW_ROLE_POST_WORK_GAS_TESTER
  );
  return logMessages;
};
