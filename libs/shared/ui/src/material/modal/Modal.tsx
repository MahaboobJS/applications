import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import type { SxProps } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BaseModal from '@mui/material/Modal';

import { colors } from '../../styles/colors';
import { Layout } from '../layout';

export type ModalProps = {
  open: boolean;
  onModalClose: () => void;
  title?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  closeIconSx?: SxProps;
  containerSx?: SxProps;
};

export const Modal: React.FC<ModalProps> = ({
  onModalClose,
  open,
  title,
  content,
  footer,
  closeIconSx,
  containerSx,
}: ModalProps) => {
  const isTitleExist = typeof title !== 'undefined';
  const customStyle = { ...styles.wrapper, ...(containerSx || {}) };
  const titleStyle = {
    ...styles.header,
    ...(isTitleExist ? {} : styles.noTitle),
  };
  const handleClose = () => {
    onModalClose();
  };

  return (
    <BaseModal open={open} onClose={handleClose}>
      <Box sx={customStyle}>
        <Layout.FlexBox sx={titleStyle}>
          {isTitleExist && title}
          <IconButton onClick={handleClose} size="small">
            <CloseIcon sx={closeIconSx} />
          </IconButton>
        </Layout.FlexBox>
        {content}
        {footer && <Layout.FlexBox sx={styles.footer}>{footer}</Layout.FlexBox>}
      </Box>
    </BaseModal>
  );
};

const styles: Record<string, SxProps> = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    color: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  noTitle: {
    justifyContent: 'flex-end',
  },
  footer: {
    justifyContent: 'end',
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
    backgroundColor: colors.surface.muted,
  },
};
