import type { StoryObj, Meta } from '@storybook/react';

import { DrawerRight } from './DrawerRight';

const meta: Meta<typeof DrawerRight> = {
  component: DrawerRight,
  title: 'Shared / Drawer / Right',
};
export default meta;
const Content = () => <div>Right content</div>;

type Story = StoryObj<typeof DrawerRight>;

export const Primary: Story = {
  args: { children: <Content /> },
};
