import type { SxProps } from '@mui/material';

import { FlexBox } from '../FlexBox';



type Props = React.PropsWithChildren<{ sx?: SxProps }>;

export const Page = ({ children, sx }: Props) => {
  return (
    <FlexBox
      sx={{
        width: '100vw',
        height: '5vh',
        ...sx,
      }}
    >
      {children}
    </FlexBox>
  );
};
