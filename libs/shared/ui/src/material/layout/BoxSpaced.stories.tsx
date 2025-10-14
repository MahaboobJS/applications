import { faker } from '@faker-js/faker';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

import { BoxSpaced } from './BoxSpaced';

const meta: Meta<typeof BoxSpaced> = {
  component: BoxSpaced,
  title: 'Shared / Layout / Box Spaced',
};
export default meta;
type Story = StoryObj<typeof BoxSpaced>;
const Template: StoryFn<typeof BoxSpaced> = (args) => (
  <BoxSpaced sx={{ border: '1px solid black' }} {...args} />
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
