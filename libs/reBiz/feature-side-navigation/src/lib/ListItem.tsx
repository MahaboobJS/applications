import Link from 'next/link';

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem as MuiListItem,
  useTheme,
} from '@mui/material';

import { TextMedium } from '@ruyyaan/rebiz/ui';
import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';
import { withSx } from '@ruyyaan/shared/util-ui';

type ListItemPropsType = {
  text: string;
  link: string;
  open: boolean;
  isActive: boolean;
  iconName: IconsList;
};
export const ListItem = ({ iconName, text, link, open, isActive }: ListItemPropsType) => {
  const theme = useTheme();

  return (
    <StyledListItem disablePadding>
      <ListItemButton
        href={link}
        LinkComponent={Link}
        sx={{
          height: 40,
          borderRadius: 2,
          color: theme.palette.common.white,
          backgroundColor: isActive ? theme.palette.primary.dark : 'inherit',
          px: 1.2,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 2 : 'auto',
          }}
        >
          <ColoredIcon iconName={iconName} />
        </ListItemIcon>
        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
          <TextMedium variant={'inverted'} weight={isActive ? 'semiBold' : 'normal'}>
            {text}
          </TextMedium>
        </ListItemText>
      </ListItemButton>
    </StyledListItem>
  );
};

const ColoredIcon = withSx(Icon)(({ theme }) => ({
  color: theme.palette.common.white,
  width: 20,
}));

const StyledListItem = withSx(MuiListItem)(() => ({
  display: 'block',
  px: 1,
  color: 'inherit',
  my: 1,
}));
