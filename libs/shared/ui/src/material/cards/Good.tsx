import { colors } from '../../styles/colors';

import { Card } from './Card';

export const Good: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Card
      sx={{
        background: colors.surface.status.success,
      }}
    >
      {children}
    </Card>
  );
};
