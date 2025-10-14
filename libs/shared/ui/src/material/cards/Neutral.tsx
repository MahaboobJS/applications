import { colors } from '../../styles/colors';

import { Card } from './Card';

export const Neutral: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Card
      sx={{
        background: colors.surface.status.neutral,
      }}
    >
      {children}
    </Card>
  );
};
