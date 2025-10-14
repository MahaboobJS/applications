import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';

import { PageContent } from './PageContent';

const meta: Meta<typeof PageContent> = {
  component: PageContent,
  title: 'Shared / Layout / Page Content',
};
export default meta;
const TestContent = () => <div>{faker.hacker.phrase()}</div>;

type Story = StoryObj<typeof PageContent>;

export const Primary: Story = {
  args: { children: <TestContent /> },
};
