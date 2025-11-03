import { Home } from './Home';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Home> = {
  component: Home,
  title: 'Shared / Icons / Home',
};
export default meta;

type Story = StoryObj<typeof Home>;

export const Primary: Story = {
  args: {},
};
