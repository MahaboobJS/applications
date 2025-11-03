import { useState, useEffect } from 'react';

/**
 * Mock hook for permit roles
 * In a real application, this would fetch roles from a Zeebe workflow engine
 */
export const usePermitRoles = (): string[] => {
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    // Mock data - in a real app, this would come from Zeebe
    setRoles(['admin', 'permit-issuer', 'gas-tester']);
  }, []);

  return roles;
};

