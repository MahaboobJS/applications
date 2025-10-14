import type { StoryObj, Meta } from '@storybook/react';

import { Neutral } from './Neutral';

const meta: Meta<typeof Neutral> = {
  component: Neutral,
  title: 'Shared / Cards / Neutral',
};

export default meta;

type Story = StoryObj<typeof Neutral>;

export const Primary: Story = {
  args: {},
};
