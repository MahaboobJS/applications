import type { StoryObj, Meta } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Shared / Tabs / Tabs',
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const tabsData = [
  { value: 'sample1', label: 'Sample 1', panelContentData: <>Sample 1</> },
  { value: 'sample2', label: 'Sample 2', panelContentData: <>Sample 2</> },
];

export const Primary: Story = {
  args: {
    tabs: tabsData,
  },
};
