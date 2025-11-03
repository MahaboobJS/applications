import { Notification } from './Notifications';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Notification> = {
  component: Notification,
  title: 'Shared / Icons / Notification',
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  args: {},
};
