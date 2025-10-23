import { faker } from '@faker-js/faker';
import { ThemeProvider } from '@mui/material/styles';
import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import { Buttons } from '@ruyyaan/shared/ui';
import { themes } from '@ruyyaan/reBiz/ui-theme';

const SecondaryButton = Buttons.SecondaryButton;

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
