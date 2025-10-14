import type { StoryObj, Meta } from '@storybook/react';

import { Home } from './Home';

const meta: Meta<typeof Home> = {
  component: Home,
  title: 'Shared / Icons / Home',
};
export default meta;

type Story = StoryObj<typeof Home>;

export const Primary: Story = {
  args: {},
};
