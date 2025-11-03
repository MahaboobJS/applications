import { Filter } from './Filter';

import type { StoryObj, Meta } from '@storybook/react';


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
