import { faker } from '@faker-js/faker';
import type { StoryObj, Meta } from '@storybook/react';

import { DetailsCard } from './DetailsCard';

const meta: Meta<typeof DetailsCard> = {
  component: DetailsCard,
  title: 'Work Permit / UI / DetailsCard',
};

export default meta;

type Story = StoryObj<typeof DetailsCard>;

export const Primary: Story = {
  args: {
    title: faker.animal.cat(),
    subTitle: faker.hacker.phrase(),
    detailsList: [
      {
        boldText: faker.lorem.words(1),
        normalText: faker.lorem.words(1),
      },
    ],
  },
};
