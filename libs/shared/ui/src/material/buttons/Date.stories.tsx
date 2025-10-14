import type { StoryObj, Meta } from '@storybook/react';

import { Date } from './Date';

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
