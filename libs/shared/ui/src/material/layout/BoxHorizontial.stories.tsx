import { faker } from '@faker-js/faker';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

import { BoxHorizontal } from './BoxHorizontal';
import { FlexBox } from './FlexBox';

const meta: Meta<typeof BoxHorizontal> = {
  component: BoxHorizontal,
  title: 'Shared / Layout / Box Horizontial',
};
export default meta;

type Story = StoryObj<typeof BoxHorizontal>;

const Template: StoryFn<typeof BoxHorizontal> = (args) => (
  <BoxHorizontal sx={{ border: '1px solid black' }} {...args} />
);

export const Primary: Story = {
  render: (args) => {
    return (
      <FlexBox>
        <Template {...args}>{faker.hacker.phrase()}</Template>
        <Template {...args}>{faker.hacker.phrase()}</Template>
        <Template {...args}>{faker.hacker.phrase()}</Template>
      </FlexBox>
    );
  },
};
