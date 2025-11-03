import { Cancel } from './Cancel';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Cancel> = {
  component: Cancel,
  title: 'Shared / Icons / Cancel',
};
export default meta;

type Story = StoryObj<typeof Cancel>;

export const Primary: Story = {
  args: {},
};

export const Colored: Story = {
  args: {
    sx: { color: 'red' },
  },
};
