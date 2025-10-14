import type { StoryObj, Meta } from '@storybook/react';

import { Right } from './Right';

const meta: Meta<typeof Right> = {
  component: Right,
  title: 'Shared / Icons / Right',
};
export default meta;

type Story = StoryObj<typeof Right>;

export const Primary: Story = {
  args: {},
};
