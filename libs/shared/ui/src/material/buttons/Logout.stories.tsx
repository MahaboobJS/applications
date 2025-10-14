import type { StoryObj, Meta } from '@storybook/react';

import { Logout } from './Logout';

const meta: Meta<typeof Logout> = {
  component: Logout,
  title: 'Shared / Buttons / Logout',
};
export default meta;

type Story = StoryObj<typeof Logout>;

export const Primary: Story = {
  args: {},
};
