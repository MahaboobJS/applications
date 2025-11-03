import { Clear } from './Clear';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Clear> = {
  component: Clear,
  title: 'Shared / Cards / Clear',
};
export default meta;
const Content = () => <div>This is an empty card</div>;

type Story = StoryObj<typeof Clear>;

export const Primary: Story = {
  args: { children: [<Content />] },
};
