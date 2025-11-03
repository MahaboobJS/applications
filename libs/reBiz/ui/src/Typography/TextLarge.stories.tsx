import { faker } from '@faker-js/faker';

import { TextLarge } from './TextLarge';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof TextLarge> = {
  component: TextLarge,
  title: 'Rebiz / UI / Typography / TextLarge',
};

export default meta;

type Story = StoryObj<typeof TextLarge>;

export const Primary: Story = {
  args: {
    children: faker.hacker.phrase(),
  },
};

export const Title: Story = {
  args: {
    children: faker.hacker.phrase(),
    variant: 'title',
  },
};

export const TitleBold: Story = {
  args: {
    children: faker.hacker.phrase(),
    variant: 'title',
    weight: 'bold',
  },
};

export const TitleLight: Story = {
  args: {
    children: faker.hacker.phrase(),
    variant: 'title',
    weight: 'light',
  },
};

export const Muted: Story = {
  args: {
    children: faker.hacker.phrase(),
    variant: 'muted',
  },
};
