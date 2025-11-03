import { Neutral } from './Neutral';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Neutral> = {
  component: Neutral,
  title: 'Shared / Cards / Neutral',
};

export default meta;

type Story = StoryObj<typeof Neutral>;

export const Primary: Story = {
  args: {},
};
