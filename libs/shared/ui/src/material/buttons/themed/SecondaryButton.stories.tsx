import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import { SecondaryButton } from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
  title: 'Shared / Buttons / SecondaryButton',
};

export default meta;

type Story = StoryObj<typeof SecondaryButton>;

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
