import type { StoryObj, Meta } from '@storybook/react';

import { Back } from './Back';

const meta: Meta<typeof Back> = {
  component: Back,
  title: 'Shared / Buttons / Back',
};
export default meta;
type Story = StoryObj<typeof Back>;

export const Primary: Story = {
  args: {},
};
