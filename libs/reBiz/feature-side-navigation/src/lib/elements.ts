import { Drawer as MuiDrawer, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material';

const drawerWidth = 240;

export const SideNavigationDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: { theme: Theme; open: boolean }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

export const SideNavigationToolbar = styled(
  Toolbar,
  {}
)(({ theme }) => ({
  display: 'block',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.white,
}));
