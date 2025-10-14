import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Paper } from '@mui/material';
import type { SxProps } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BasePopover from '@mui/material/Popover';

import { colors } from '../../styles/colors';
import { Layout } from '../layout';

export type PopoverProps = {
  id?: string;
  open: boolean;
  onPopoverClose: () => void;
  title: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  top?: string | number;
  left?: string | number;
  closeIconSx?: SxProps;
  containerSx?: SxProps;
};

export const Popover: React.FC<PopoverProps> = ({
  onPopoverClose,
  open,
  title,
  content,
  footer,
  top,
  left,
  closeIconSx,
  containerSx,
}: PopoverProps) => {
  const handleCancel = () => {
    onPopoverClose();
  };

  return (
    <BasePopover
      slotProps={{
        root: {
          sx: {
            top,
            left,
          },
        },
      }}
      open={open}
      onClose={onPopoverClose}
    >
      <Paper sx={containerSx}>
        <Layout.BoxVertical>
          <Box sx={styles.wrapper}>
            <Layout.FlexBox sx={styles.header}>
              {title}
              <IconButton onClick={handleCancel} size="small">
                <CloseIcon sx={closeIconSx} />
              </IconButton>
            </Layout.FlexBox>
            {content}
            {footer && <Layout.FlexBox sx={styles.footer}>{footer}</Layout.FlexBox>}
          </Box>
        </Layout.BoxVertical>
      </Paper>
    </BasePopover>
  );
};

const styles = {
  wrapper: {
    padding: 2,
    flex: '1 1 auto',
    overflowY: 'auto',
    paddingY: 0,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  footer: {
    justifyContent: 'end',
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
    backgroundColor: colors.surface.muted,
  },
};
