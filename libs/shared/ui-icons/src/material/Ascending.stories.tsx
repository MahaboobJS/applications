import { Ascending } from './Ascending';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Ascending> = {
  component: Ascending,
  title: 'Shared / Icons / Ascending',
};
export default meta;

type Story = StoryObj<typeof Ascending>;

export const Primary: Story = {
  args: {},
};
