import type { StoryObj, Meta } from '@storybook/react';

import { Cancel } from './Cancel';

const meta: Meta<typeof Cancel> = {
  component: Cancel,
  title: 'Shared / Buttons / Cancel',
};
export default meta;

type Story = StoryObj<typeof Cancel>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
