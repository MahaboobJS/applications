import { Cancel } from './Cancel';

import type { StoryObj, Meta } from '@storybook/react';


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
