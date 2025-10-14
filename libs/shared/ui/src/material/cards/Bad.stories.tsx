import type { StoryObj, Meta } from '@storybook/react';

import { Bad } from './Bad';

const meta: Meta<typeof Bad> = {
  component: Bad,
  title: 'Shared / Cards / Bad',
};

export default meta;

type Story = StoryObj<typeof Bad>;

export const Primary: Story = {
  args: {},
};
