import type { StoryObj, Meta } from '@storybook/react';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Shared / Chip',
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: { text: 'Chip' },
};
