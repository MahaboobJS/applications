import { Search } from './Search';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Shared / Buttons / Search',
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {},
};
