import { ButtonBase, useTheme } from '@mui/material';

import { Layout, Styles } from '@ruyyaan/shared/ui';
import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';

import { TextRegular } from '../Typography';

type Props = {
  onClick: () => void;
};
export const BackButton = ({ onClick }: Props) => {
  const theme = useTheme();
  return (
    <ButtonBase onClick={onClick} sx={{ color: theme.palette.primary.main }}>
      <Layout.BoxCenter sx={{ gap: Styles.sizes.pixels._1 }}>
        <Icon iconName={IconsList.backButton} sx={{ fontSize: '24px' }} />
        <TextRegular variant="title">Back</TextRegular>
      </Layout.BoxCenter>
    </ButtonBase>
  );
};
