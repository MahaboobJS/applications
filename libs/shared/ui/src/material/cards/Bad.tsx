import { Card } from './Card';
import { colors } from '../../styles/colors';


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
