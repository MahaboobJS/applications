import { Descending } from './Descending';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Descending> = {
  component: Descending,
  title: 'Shared / Icons / Descending',
};

export default meta;

type Story = StoryObj<typeof Descending>;

export const Primary: Story = {
  args: {},
};
