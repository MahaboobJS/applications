import { faker } from '@faker-js/faker';

import { DetailsCard } from './DetailsCard';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof DetailsCard> = {
  component: DetailsCard,
  title: 'Rebiz / UI / DetailsCard',
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
