import { DrawerRight } from './DrawerRight';

import type { StoryObj, Meta } from '@storybook/react';


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
