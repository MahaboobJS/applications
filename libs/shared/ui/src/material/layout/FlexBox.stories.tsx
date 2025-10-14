import type { StoryObj, Meta } from '@storybook/react';

import { FlexBox } from './FlexBox';

const meta: Meta<typeof FlexBox> = {
  component: FlexBox,
  title: 'Shared / Layout / Box Flex',
};
export default meta;

type Story = StoryObj<typeof FlexBox>;

export const Primary: Story = {
  args: {},
};
