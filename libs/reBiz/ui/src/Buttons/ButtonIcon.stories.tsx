
import { IconsList } from '@ruyyaan/shared/ui-icons';

import { ButtonIcon } from './ButtonIcon';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon,
  title: 'Rebiz / UI / Buttons / ButtonIcon',
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
  args: {
    link: 'text',
    icon: IconsList.activity,
  },
};

export const Print: Story = {
  args: {
    link: 'text',
    icon: IconsList.print,
  },
};
