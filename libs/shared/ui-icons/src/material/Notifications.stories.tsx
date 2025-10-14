import type { StoryObj, Meta } from '@storybook/react';

import { Notification } from './Notifications';

const meta: Meta<typeof Notification> = {
  component: Notification,
  title: 'Shared / Icons / Notification',
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  args: {},
};
