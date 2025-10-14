import { Route, Routes } from 'react-router-dom';

import { faker } from '@faker-js/faker';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { FlexBox } from '../FlexBox';

import { Main } from './Main';
const meta: Meta<typeof Main> = {
  component: Main,
  title: 'Shared / Layout / Main',
  decorators: [withRouter],
  render: ({ outlet, ...args }) => (
    <FlexBox>
      <Routes>
        <Route path={'/'} element={<Main {...args} />}>
          <Route index element={outlet} />
        </Route>
      </Routes>
    </FlexBox>
  ),
};
export default meta;

type Story = StoryObj<typeof Main>;

export const Primary: Story = {
  args: {
    outlet: <Box>{faker.lorem.paragraphs(4)}</Box>,
  },
};
