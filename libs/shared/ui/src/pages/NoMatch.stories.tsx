import { NoMatch } from './NoMatch';

import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof NoMatch> = {
  component: NoMatch,
  title: 'Shared / Pages / NoMatch',
};
export default meta;

type Story = StoryObj<typeof NoMatch>;

export const Primary: Story = {
  args: {},
};
