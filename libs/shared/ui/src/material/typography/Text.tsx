import { Typography } from '@mui/material';

function Small({ text }: { readonly text: string }) {
  return <Typography variant="h1">{text}</Typography>;
}

export const Text = {
  Small,
};
