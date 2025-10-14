import type { StoryObj, Meta } from '@storybook/react';

import { Descending } from './Descending';

const meta: Meta<typeof Descending> = {
  component: Descending,
  title: 'Shared / Icons / Descending',
};

export default meta;

type Story = StoryObj<typeof Descending>;

export const Primary: Story = {
  args: {},
};
