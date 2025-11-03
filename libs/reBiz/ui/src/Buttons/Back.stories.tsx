import { action } from '@storybook/addon-actions';

import { BackButton } from './Back';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof BackButton> = {
  component: BackButton,
  title: 'Rebiz / UI / Buttons / Back',
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Primary: Story = {
  args: {
    onClick: action('on-click'),
  },
};
