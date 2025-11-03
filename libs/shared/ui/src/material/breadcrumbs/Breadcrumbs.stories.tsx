import Breadcrumbs from './Breadcrumbs';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Shared / Progress / Breadcrumbs',
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Primary: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', disabled: false },
      { label: 'Products', href: '/products', disabled: false },
      { label: 'Category', href: '/products/category', disabled: true },
    ],
  },
};
