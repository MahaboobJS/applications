import { Done } from './Done';

import type { StoryObj, Meta } from '@storybook/react';


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
