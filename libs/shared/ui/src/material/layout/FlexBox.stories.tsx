import { FlexBox } from './FlexBox';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof FlexBox> = {
  component: FlexBox,
  title: 'Shared / Layout / Box Flex',
};
export default meta;

type Story = StoryObj<typeof FlexBox>;

export const Primary: Story = {
  args: {},
};
