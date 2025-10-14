import { faker } from '@faker-js/faker';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

import { BoxVertical } from './BoxVertical';

const meta: Meta<typeof BoxVertical> = {
  component: BoxVertical,
  title: 'Shared / Layout / Box Vertical',
};
export default meta;
type Story = StoryObj<typeof BoxVertical>;
const Template: StoryFn<typeof BoxVertical> = (args) => (
  <BoxVertical sx={{ border: '1px solid black' }} {...args} />
);
export const Primary: Story = {
  render: (args) => (
    <>
      <Template {...args}>{faker.hacker.phrase()}</Template>
      <Template {...args}>{faker.hacker.phrase()}</Template>
      <Template {...args}>{faker.hacker.phrase()}</Template>
    </>
  ),
};
