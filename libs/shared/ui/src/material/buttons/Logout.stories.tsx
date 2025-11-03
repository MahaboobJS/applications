import { Logout } from './Logout';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Logout> = {
  component: Logout,
  title: 'Shared / Buttons / Logout',
};
export default meta;

type Story = StoryObj<typeof Logout>;

export const Primary: Story = {
  args: {},
};
