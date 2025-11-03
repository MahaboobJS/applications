import { Right } from './Right';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Right> = {
  component: Right,
  title: 'Shared / Icons / Right',
};
export default meta;

type Story = StoryObj<typeof Right>;

export const Primary: Story = {
  args: {},
};
