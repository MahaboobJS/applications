import type { StoryObj, Meta } from '@storybook/react';

import { History } from './History';

const meta: Meta<typeof History> = {
  component: History,
  title: 'Shared / Icons / History',
};
export default meta;

type Story = StoryObj<typeof History>;

export const Primary: Story = {
  args: {},
};
