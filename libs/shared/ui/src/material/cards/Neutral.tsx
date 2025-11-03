import { Card } from './Card';
import { colors } from '../../styles/colors';


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
