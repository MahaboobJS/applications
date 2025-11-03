import { faker } from '@faker-js/faker';
import { fn } from '@storybook/test';

import { ThemeProvider } from '@mui/material/styles';

import { themes } from '@ruyyaan/rebiz/ui-theme';
import { Buttons } from '@ruyyaan/shared/ui';

import type { StoryObj, Meta } from '@storybook/react';

const {SecondaryButton} = Buttons;

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
  title: 'Rebiz / UI / Buttons / Secondary',
  decorators: [
    (Story) => (
      <ThemeProvider theme={themes.customerA}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SecondaryButton>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    text: faker.lorem.words(2),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: faker.lorem.words(2),
  },
};
