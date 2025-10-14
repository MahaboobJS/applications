import { colors } from '../../styles/colors';

import { Card } from './Card';

export const Bad: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Card
      sx={{
        background: colors.surface.status.critical,
      }}
    >
      {children}
    </Card>
  );
};
