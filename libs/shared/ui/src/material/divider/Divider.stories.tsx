import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Shared / Divider',
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
  args: {},
  render: (args) => (
    <div>
      <div>above</div>
      <Divider {...args} />
      <div>below</div>
    </div>
  ),
};
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
      <span>Left Content</span>
      <Divider {...args} />
      <span>Right Content</span>
    </div>
  ),
};
