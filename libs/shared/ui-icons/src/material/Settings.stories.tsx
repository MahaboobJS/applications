import type { StoryObj, Meta } from '@storybook/react';

import { Settings } from './Settings';

const meta: Meta<typeof Settings> = {
  component: Settings,
  title: 'Shared / Icons / Settings',
};

export default meta;

type Story = StoryObj<typeof Settings>;

export const Primary: Story = {
  args: {},
};
