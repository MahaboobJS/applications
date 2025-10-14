import type { StoryObj, Meta } from '@storybook/react';

import { Add } from './Add';

const meta: Meta<typeof Add> = {
  component: Add,
  title: 'Shared / Buttons / Add',
};
export default meta;
type Story = StoryObj<typeof Add>;

export const Primary: Story = {
  args: {},
};
