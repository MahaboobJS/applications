import type { StoryObj, Meta } from '@storybook/react';

import { Done } from './Done';

const meta: Meta<typeof Done> = {
  component: Done,
  title: 'Shared / Buttons / Done',
};
export default meta;

type Story = StoryObj<typeof Done>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
