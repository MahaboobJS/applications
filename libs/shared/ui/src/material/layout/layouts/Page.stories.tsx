import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';

import { Page } from './Page';

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
