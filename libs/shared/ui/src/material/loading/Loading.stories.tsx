import { Loading } from './Loading';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Loading> = {
  component: Loading,
  title: 'Shared / Loading / Loading',
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
