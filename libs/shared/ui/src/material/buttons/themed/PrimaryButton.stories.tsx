import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  title: 'Shared / Buttons / PrimaryButton',
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    text: faker.lorem.words(2),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: faker.lorem.words(2),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    text: faker.lorem.words(2),
  },
};
