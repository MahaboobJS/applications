export type Access = {
  homepage: string;
  permit: {
    read: boolean;
    create: boolean;
    issuer: boolean;
    receiver: boolean;
    gasTester: boolean;
    preWorkGasTester: boolean;
    interimWorkGasTester: boolean;
    postWorkGasTester: boolean;
    logs?: string[];
  };
  org?: {
    create?: boolean;
    manageWorkflows?: boolean;
  };
  admin?: {
    tabs: {
      dashboard?: boolean;
      users?: boolean;
      roles?: boolean;
      organizations?: boolean;
      allOrganizations?: boolean;
      allUsers?: boolean;
      locations?: boolean;
      allUsersUnassigned?: boolean;
      docs?: boolean;
    };
    roles?: {
      assignSystem?: boolean;
    };
  };
  mainMenu: {
    permit?: boolean;
    gastester?: boolean;
    notifications?: boolean;
    admin?: boolean;
    profile?: boolean;
    myPermits?: boolean;
    monitoring?: boolean;
  };
};
