import { Route, Routes } from 'react-router-dom';

import { faker } from '@faker-js/faker';
import { Box } from '@mui/material';
import type { StoryObj, Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { FlexBox } from '../FlexBox';

import { SmallLeftLargeRight } from './SmallLeftLargeRight';

const meta: Meta<typeof SmallLeftLargeRight> = {
  component: SmallLeftLargeRight,
  title: 'Shared / Layout / Small Left + Large Right',
  decorators: [withRouter],
  render: ({ outlet, ...args }) => (
    <FlexBox>
      <Routes>
        <Route path={'/'} element={<SmallLeftLargeRight {...args} />}>
          <Route index element={outlet} />
        </Route>
      </Routes>
    </FlexBox>
  ),
};
export default meta;

type Story = StoryObj<typeof SmallLeftLargeRight>;

export const Primary: Story = {
  args: {
    children: <Box sx={{ border: '1px solid black' }}>Left: {faker.lorem.sentences(1)}</Box>,
    // @ts-expect-error this object is not typed to expect react-router outlet yet
    outlet: <Box sx={{ border: '1px solid black' }}>Right: {faker.lorem.paragraphs(4)}</Box>,
  },
};
