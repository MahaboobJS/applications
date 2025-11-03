import { faker } from '@faker-js/faker';

import { Space } from './Space';

import type { StoryFn, Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Space> = {
  component: Space,
  title: 'Shared / Layout / Spacer',
};

export default meta;
type Story = StoryObj<typeof Space>;
const Template: StoryFn<typeof Space> = (args) => <Space {...args} />;

export const Primary: Story = {
  render: () => (
    <>
      <Template space="_1">{faker.hacker.phrase()}</Template>
      <Template space="_2">{faker.hacker.phrase()}</Template>
      <Template space="_3">{faker.hacker.phrase()}</Template>
      <Template space="_4">{faker.hacker.phrase()}</Template>
      <Template space="_5">{faker.hacker.phrase()}</Template>
    </>
  ),
};
