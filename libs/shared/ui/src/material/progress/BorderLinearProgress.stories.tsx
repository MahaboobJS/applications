import { BorderLinearProgress } from './BorderLinearProgress';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof BorderLinearProgress> = {
  component: BorderLinearProgress,
  title: 'Shared / Progress / BorderLinearProgress',
};
export default meta;

type Story = StoryObj<typeof BorderLinearProgress>;

export const Primary: Story = {
  args: {},
};
