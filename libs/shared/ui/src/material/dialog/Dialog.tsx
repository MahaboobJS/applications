
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';

type Props = {
  open: boolean;
  onDialogClose?: () => void;
  title: React.ReactNode;
  content: React.ReactNode;
  actions?: React.ReactNode[];
  width?: string | number;
};

export const Dialog = ({ title, content, actions, onDialogClose, open, width }: Props) => {
  return (
    <MUIDialog
      onClose={onDialogClose}
      open={open}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: width || 'auto',
          maxWidth: '90%',
        },
      }}
    >
      <DialogTitle sx={{ paddingRight: 2, position: 'relative' }}>
        {title}
        <IconButton
          aria-label="close"
          onClick={onDialogClose}
          sx={{ position: 'absolute', top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      {!!actions?.length && <DialogActions>{actions}</DialogActions>}
    </MUIDialog>
  );
};
