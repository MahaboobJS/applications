import { LeftArrow } from './LeftArrow';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof LeftArrow> = {
  component: LeftArrow,
  title: 'Shared / Icons / LeftArrow',
};
export default meta;

type Story = StoryObj<typeof LeftArrow>;

export const Primary: Story = {
  args: {},
};
