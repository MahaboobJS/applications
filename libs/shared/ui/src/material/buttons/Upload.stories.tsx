import type { StoryObj, Meta } from '@storybook/react';

import { Upload } from './Upload';

const meta: Meta<typeof Upload> = {
  component: Upload,
  title: 'Shared / Buttons / Upload',
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const Primary: Story = {
  args: {},
};
