import { faker } from '@faker-js/faker';


import { Layout } from '../layout';
import { Title } from './Title';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Title.ExtraLarge> = {
  component: Title.ExtraLarge,
  title: 'Shared / Typography / Title',
};
export default meta;

export const Primary: StoryFn<typeof Title.ExtraLarge> = () => (
  <Layout.BoxVertical>
    <Title.ExtraSmall text={`Title ExtraSmall - ${faker.hacker.phrase()}`} />
    <Title.Small text={`Title Small - ${faker.hacker.phrase()}`} />
    <Title.Regular text={`Title Regular - ${faker.hacker.phrase()}`} />
    <Title.Medium text={`Title Medium - ${faker.hacker.phrase()}`} />
    <Title.Large text={`Title Large - ${faker.hacker.phrase()}`} />
    <Title.ExtraLarge text={`Title ExtraLarge - ${faker.hacker.phrase()}`} />
  </Layout.BoxVertical>
);
