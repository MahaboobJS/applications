import type { StoryObj, Meta } from '@storybook/react';

import { LeftArrow } from './LeftArrow';

const meta: Meta<typeof LeftArrow> = {
  component: LeftArrow,
  title: 'Shared / Icons / LeftArrow',
};
export default meta;

type Story = StoryObj<typeof LeftArrow>;

export const Primary: Story = {
  args: {},
};
