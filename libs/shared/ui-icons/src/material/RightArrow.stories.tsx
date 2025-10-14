import type { StoryObj, Meta } from '@storybook/react';

import { RightArrow } from './RightArrow';

const meta: Meta<typeof RightArrow> = {
  component: RightArrow,
  title: 'Shared / Icons / RightArrow',
};
export default meta;

type Story = StoryObj<typeof RightArrow>;

export const Primary: Story = {
  args: {},
};
