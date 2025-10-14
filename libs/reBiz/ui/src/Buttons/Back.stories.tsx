import { action } from '@storybook/addon-actions';
import type { StoryObj, Meta } from '@storybook/react';

import { BackButton } from './Back';

const meta: Meta<typeof BackButton> = {
  component: BackButton,
  title: 'Work Permit / UI / Buttons / Back',
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Primary: Story = {
  args: {
    onClick: action('on-click'),
  },
};
