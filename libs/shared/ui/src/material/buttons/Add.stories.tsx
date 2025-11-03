import { Add } from './Add';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Add> = {
  component: Add,
  title: 'Shared / Buttons / Add',
};
export default meta;
type Story = StoryObj<typeof Add>;

export const Primary: Story = {
  args: {},
};
