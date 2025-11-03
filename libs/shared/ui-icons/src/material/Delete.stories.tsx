import { Delete } from './Delete';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Delete> = {
  component: Delete,
  title: 'Shared / Icons / Delete',
};
export default meta;

type Story = StoryObj<typeof Delete>;

export const Primary: Story = {
  args: {},
};
