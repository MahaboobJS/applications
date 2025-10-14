import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { ErrorFallback } from './ErrorFallback';

const meta: Meta<typeof ErrorFallback> = {
  component: ErrorFallback,
  title: 'Shared / Pages / ErrorFallback',
  decorators: [withRouter],
};
export default meta;
type Story = StoryObj<typeof ErrorFallback>;

export const Primary: Story = {
  args: {
    error: {
      message: faker.hacker.phrase(),
    },
    link: '/dashboard',
  },
};
