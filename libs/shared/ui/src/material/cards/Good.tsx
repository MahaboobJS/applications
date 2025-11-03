import { Card } from './Card';
import { colors } from '../../styles/colors';


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
