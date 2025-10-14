import type { StoryObj, Meta } from '@storybook/react';

import { Filter } from './Filter';

const meta: Meta<typeof Filter> = {
  component: Filter,
  title: 'Shared / Icons / Filter',
};
export default meta;

type Story = StoryObj<typeof Filter>;

export const Primary: Story = {
  args: {},
};

export const Colored: Story = {
  args: {
    sx: { color: 'secondary' },
  },
};
