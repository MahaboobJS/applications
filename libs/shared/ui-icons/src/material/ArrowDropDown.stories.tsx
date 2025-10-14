import type { StoryObj, Meta } from '@storybook/react';

import { DropDownArrow } from './ArrowDropDown';

const meta: Meta<typeof DropDownArrow> = {
  component: DropDownArrow,
  title: 'Shared / Icons / DropDownArrow',
};
export default meta;

type Story = StoryObj<typeof DropDownArrow>;

export const Primary: Story = {
  args: {},
};
