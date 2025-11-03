import { Dashboard } from './Dashboard';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
  title: 'Shared / Buttons / Dashboard',
};

export default meta;

type Story = StoryObj<typeof Dashboard>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
