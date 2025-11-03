import { Upload } from './Upload';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Upload> = {
  component: Upload,
  title: 'Shared / Buttons / Upload',
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const Primary: Story = {
  args: {},
};
