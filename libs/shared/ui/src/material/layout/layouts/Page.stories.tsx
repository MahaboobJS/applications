import { faker } from '@faker-js/faker';

import { Page } from './Page';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Page> = {
  component: Page,
  title: 'Shared / Layout / Page',
};
export default meta;

const TestContent = () => <div>{faker.lorem.paragraphs(10)}</div>;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  args: { children: <TestContent /> },
};
