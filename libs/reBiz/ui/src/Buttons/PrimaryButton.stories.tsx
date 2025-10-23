import { faker } from '@faker-js/faker';
import { ThemeProvider } from '@mui/material/styles';
import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import { Buttons } from '@ruyyaan/shared/ui';
import { themes } from '@ruyyaan/reBiz/ui-theme';

const PrimaryButton = Buttons.PrimaryButton;

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  title: 'Rebiz / UI / Buttons / Primary',
  decorators: [
    (Story) => (
      <ThemeProvider theme={themes.customerA}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

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

export const Loading: Story = {
  args: {
    loading: true,
    text: faker.lorem.words(2),
  },
};
