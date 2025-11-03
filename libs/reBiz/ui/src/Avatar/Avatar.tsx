import { Avatar as AvatarBase, type SxProps } from '@mui/material';

export function Avatar({
  src,
  sx = {},
}: Readonly<{
  src: string | undefined;
  sx?: SxProps;
}>) {
  return <AvatarBase alt="Profile" src={src} variant={'circular'} sx={sx} />;
}
