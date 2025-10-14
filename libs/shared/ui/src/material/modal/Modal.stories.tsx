import type { StoryObj, Meta } from '@storybook/react';

import { Layout } from '../layout';
import { Typography } from '../typography';

import { Modal } from './Modal';

const title = 'Modal Title';
const open = true;
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Shared / Modal / Modal',
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    title,
    open,
  },
};
export const WithContent: Story = {
  args: {
    title,
    open,
    content: (
      <Layout.BoxHorizontal sx={{ justifyContent: 'space-between' }}>
        <Typography.General.Subtitle text={'Space'} />
        <Typography.General.Subtitle text={'between'} />
      </Layout.BoxHorizontal>
    ),
  },
};
