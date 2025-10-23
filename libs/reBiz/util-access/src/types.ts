// MongoDB-based AccessRole type
export interface AccessRole {
  id: string;
  name: string;
  AccessScope: string;
  AccessAction: string[];
  scopeDomain?: string;
}

type CustomAccess = {
  customAccessRequirements: (args: unknown) => void;
  AccessScope: 'CUSTOM';
};

type StandardAccess = {
  AccessScope: Exclude<PartialAccessRole['AccessScope'], 'CUSTOM'>;
};

export type AccessRoleWithCustom = Omit<PartialAccessRole, 'AccessScope'> &
  (StandardAccess | CustomAccess);

export type PartialAccessRole = Pick<AccessRole, 'AccessScope' | 'AccessAction' | 'scopeDomain'>;

export type AccessRequired =
  | { type: 'all'; access: AccessRoleWithCustom[]; checkValue?: boolean }
  | { type: 'some'; access: AccessRoleWithCustom[]; checkValue?: boolean };
