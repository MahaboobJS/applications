import { Bad } from './Bad';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Bad> = {
  component: Bad,
  title: 'Shared / Cards / Bad',
};

export default meta;

type Story = StoryObj<typeof Bad>;

export const Primary: Story = {
  args: {},
};
