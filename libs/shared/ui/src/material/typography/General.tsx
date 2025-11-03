import * as React from 'react';

import TypographyMaterial from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material';

import { useTheme } from '../../providers/StyleProvider';



const useColor = ({ muted }: { muted?: boolean }) => {
  const theme = useTheme();
  const color = muted ? theme.text.status.neutral : theme.text.default;
  return color;
};

const convertToCaps = (text: string | number) => {
  if (typeof text === 'string') {
    return text.toUpperCase();
  }
  return text;
};

type CommonTypographyProps = {
  text: string | number;
  muted?: boolean;
  caps?: boolean;
} & TypographyProps;

const SubtitleBold: React.FC<CommonTypographyProps> = ({ text, muted, caps, ...props }) => {
  const color = useColor({ muted });
  return (
    <TypographyMaterial variant="subtitle1" sx={{ fontWeight: '600', color }} {...props}>
      {caps ? convertToCaps(text) : text}
    </TypographyMaterial>
  );
};

const Subtitle: React.FC<CommonTypographyProps> = ({ text, muted, caps, ...props }) => {
  const color = useColor({ muted });
  return (
    <TypographyMaterial variant="subtitle1" sx={{ fontWeight: '500', color }} {...props}>
      {caps ? convertToCaps(text) : text}
    </TypographyMaterial>
  );
};

const Text: React.FC<CommonTypographyProps> = ({ text, muted, caps, ...props }) => {
  const color = useColor({ muted });
  return (
    <TypographyMaterial variant="inherit" sx={{ fontWeight: 'none', color }} {...props}>
      {caps ? convertToCaps(text) : text}
    </TypographyMaterial>
  );
};

export const General = {
  Subtitle,
  SubtitleBold,
  Text,
};
