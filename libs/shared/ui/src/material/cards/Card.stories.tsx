import type { StoryObj, Meta } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Shared / Cards / Card',
};
export default meta;

const Content = () => <div>This is an empty card</div>;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: [<Content />],
  },
};
