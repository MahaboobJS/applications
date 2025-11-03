
import { Layout } from '../layout';
import { Typography } from '../typography';
import { Popover } from './Popover';

import type { StoryObj, Meta } from '@storybook/react';

const title = 'Popover Title';
const open = true;
const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Shared / Popover / Popover',
};
export default meta;

type Story = StoryObj<typeof Popover>;

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
