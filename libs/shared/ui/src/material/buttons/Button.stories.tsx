import { faker } from '@faker-js/faker';

import { Button } from './Button';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Shared / Buttons / Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: faker.lorem.words(2),
  },
};
