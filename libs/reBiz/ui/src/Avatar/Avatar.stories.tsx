import type { StoryObj, Meta } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Work Permit / UI / Avatar',
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
};
