import { Avatar } from './Avatar';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Rebiz / UI / Avatar',
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
};
