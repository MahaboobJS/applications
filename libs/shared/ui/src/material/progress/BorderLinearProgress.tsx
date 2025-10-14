import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import { Styles } from '../../styles';

export const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 2,
  borderRadius: 1,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: Styles.colors.text.interactive.default,
  },
}));
