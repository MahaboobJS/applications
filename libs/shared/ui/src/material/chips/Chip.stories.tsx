import { Chip } from './Chip';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Shared / Chip',
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: { text: 'Chip' },
};
