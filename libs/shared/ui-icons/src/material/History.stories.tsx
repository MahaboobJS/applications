import { History } from './History';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof History> = {
  component: History,
  title: 'Shared / Icons / History',
};
export default meta;

type Story = StoryObj<typeof History>;

export const Primary: Story = {
  args: {},
};
