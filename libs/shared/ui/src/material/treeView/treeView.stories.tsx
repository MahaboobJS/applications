import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';

import { TreeView } from './treeView';

const meta: Meta<typeof TreeView> = {
  component: TreeView,
  title: 'Shared / Navigation / Tree',
};
export default meta;

type Story = StoryObj<typeof TreeView>;

export const Primary: Story = {
  args: {
    data: {
      id: 'root',
      name: 'Top',
      children: [
        { id: '1', name: faker.animal.cat() },
        { id: '2', name: faker.animal.cat() },
        {
          id: '3',
          name: faker.animal.cat(),
          children: [
            { id: '1', name: faker.animal.cat() },
            { id: '2', name: faker.animal.cat() },
          ],
        },
      ],
    },
  },
};
