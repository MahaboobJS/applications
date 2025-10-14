import type { SxProps } from '@mui/material';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Layout, Styles } from '@ruyyaan/shared/ui';

import { TextRegular } from '../Typography';

type Props = {
  text: string;
  onClick: () => void;
  icon?: React.FC<{ sx: SxProps }>;
};
export function ButtonRound({ text, icon, onClick }: Readonly<Props>) {
  const theme = useTheme();

  const Icon = icon || null;

  return (
    <Button
      onClick={onClick}
      variant="outlined"
      color="primary"
      sx={{
        color: theme.palette.primary.main,
        borderRadius: '20px',
        textTransform: 'none',
      }}
    >
      <Layout.BoxCenter sx={{ gap: Styles.sizes.pixels._1 }}>
        {Icon && <Icon sx={{ color: theme.palette.primary.main }} />}
        <TextRegular variant={'title'} weight={'bold'}>
          {text}
        </TextRegular>
      </Layout.BoxCenter>
    </Button>
  );
}
