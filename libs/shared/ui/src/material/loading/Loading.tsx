import { CircularProgress, type SxProps, type CircularProgressProps } from '@mui/material';

import { Layout } from '../layout';

type Props = { sx?: SxProps } & CircularProgressProps;
export const Loading = ({ sx, ...props }: Props) => {
  return (
    <Layout.FlexBox sx={sx}>
      <CircularProgress {...props} />
    </Layout.FlexBox>
  );
};
