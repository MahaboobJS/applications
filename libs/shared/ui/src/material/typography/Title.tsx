import type { TypographyProps } from '@mui/material';
import Typography from '@mui/material/Typography';

const colors = {
  full: '#333',
  muted: '#888',
};

const convertToCaps = (text: string | number) => {
  if (typeof text === 'string') {
    return text.toUpperCase();
  }
  return text;
};

type CommonTitleProps = {
  text: string | number;
  muted?: boolean;
  caps?: boolean;
} & TypographyProps;

export const ExtraLarge: React.FC<CommonTitleProps> = ({ caps, text, muted, sx, ...props }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        display: 'inline',
        color: muted ? colors.muted : colors.full,
        fontWeight: '600',
        ...sx,
      }}
      {...props}
    >
      {caps ? convertToCaps(text) : text}
    </Typography>
  );
};
export const Large: React.FC<CommonTitleProps> = ({ caps, text, muted, sx, ...props }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        display: 'inline',
        color: muted ? colors.muted : colors.full,
        fontWeight: '600',
        ...sx,
      }}
      {...props}
    >
      {caps ? convertToCaps(text) : text}
    </Typography>
  );
};

export const Medium: React.FC<CommonTitleProps> = ({ caps, text, muted, sx, ...props }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        display: 'inline',
        color: muted ? colors.muted : colors.full,
        fontWeight: '600',
        ...sx,
      }}
      {...props}
    >
      {caps ? convertToCaps(text) : text}
    </Typography>
  );
};
export const Regular: React.FC<CommonTitleProps> = ({ caps, text, muted, sx, ...props }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        display: 'inline',
        color: muted ? colors.muted : colors.full,
        fontWeight: '600',
        ...sx,
      }}
      {...props}
    >
      {caps ? convertToCaps(text) : text}
    </Typography>
  );
};
export const Small: React.FC<CommonTitleProps> = ({ caps, text, muted, sx, ...props }) => {
  return (
    <Typography
      variant="h5"
      sx={{
        display: 'inline',
        color: muted ? colors.muted : colors.full,
        fontWeight: '600',
        ...sx,
      }}
      {...props}
    >
      {caps ? convertToCaps(text) : text}
    </Typography>
  );
};
export const ExtraSmall: React.FC<CommonTitleProps> = ({ caps, text, muted, sx, ...props }) => {
  return (
    <Typography
      variant="h6"
      sx={{
        display: 'inline',
        color: muted ? colors.muted : colors.full,
        fontWeight: '600',
        ...sx,
      }}
      {...props}
    >
      {caps ? convertToCaps(text) : text}
    </Typography>
  );
};
export const Tiny: React.FC<CommonTitleProps> = ({ caps, text, muted, sx, ...props }) => {
  return (
    <Typography
      variant="caption"
      sx={{
        display: 'inline',
        color: muted ? colors.muted : colors.full,
        ...sx,
      }}
      {...props}
    >
      {caps ? convertToCaps(text) : text}
    </Typography>
  );
};
export const Title = {
  ExtraLarge,
  Large,
  Medium,
  Regular,
  Small,
  ExtraSmall,
  Tiny,
};
