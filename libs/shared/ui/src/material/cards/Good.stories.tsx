import type { StoryObj, Meta } from '@storybook/react';

import { Good } from './Good';

const meta: Meta<typeof Good> = {
  component: Good,
  title: 'Shared / Cards / Good',
};

export default meta;

type Story = StoryObj<typeof Good>;

export const Primary: Story = {
  args: {},
};
