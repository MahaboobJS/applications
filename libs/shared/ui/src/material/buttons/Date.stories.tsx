import { Date } from './Date';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Date> = {
  component: Date,
  title: 'Shared / Buttons / Date',
};
export default meta;

type Story = StoryObj<typeof Date>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
