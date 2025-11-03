import { faker } from '@faker-js/faker';

import { PageContentBox } from './PageContentBox';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof PageContentBox> = {
  component: PageContentBox,
  title: 'Shared / Layout / Page Content Box',
};

export default meta;
const TestContent = () => <div>{faker.hacker.phrase()}</div>;

type Story = StoryObj<typeof PageContentBox>;

export const Primary: Story = {
  args: { children: <TestContent /> },
};
