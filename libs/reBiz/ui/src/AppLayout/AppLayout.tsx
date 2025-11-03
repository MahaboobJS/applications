import * as React from 'react';

import { Box } from '@mui/material';


type Props = React.PropsWithChildren;
export const AppLayout = ({ children }: Props) => {
  return <Box sx={{ display: 'flex' }}>{children}</Box>;
};
