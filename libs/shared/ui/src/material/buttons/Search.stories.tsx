import type { StoryObj, Meta } from '@storybook/react';

import { Search } from './Search';

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Shared / Buttons / Search',
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {},
};
