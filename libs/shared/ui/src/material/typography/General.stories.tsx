/* eslint-disable react/jsx-pascal-case */
import { faker } from '@faker-js/faker';
import type { StoryFn, Meta } from '@storybook/react';

import { Layout } from '../layout';

import { Bold1 } from './Bolden';
import { General } from './General';

const meta: Meta<typeof General.Subtitle> = {
  component: General.Subtitle,
  title: 'Shared / Typography / General',
};
export default meta;

export const Primary: StoryFn<typeof General.Subtitle> = () => (
  <Layout.BoxVertical>
    <General.SubtitleBold text={`General SubtitleBold - ${faker.hacker.phrase()}`} />
    <General.SubtitleBold
      text={`General SubtitleBold Muted - ${faker.hacker.phrase()}`}
      muted={true}
    />
    <General.Subtitle text={`General Subtitle - ${faker.hacker.phrase()}`} />
    <General.Subtitle text={`General Subtitle Muted - ${faker.hacker.phrase()}`} muted={true} />
    <General.Text text={`General Text - ${faker.hacker.phrase()}`} />
    <General.Text text={`General Text Muted- ${faker.hacker.phrase()}`} muted={true} />
    <Bold1 text={`Bolden - ${faker.hacker.phrase()}`} />
  </Layout.BoxVertical>
);
