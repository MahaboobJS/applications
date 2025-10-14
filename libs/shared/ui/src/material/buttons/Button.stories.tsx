import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';

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
