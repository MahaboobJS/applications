import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { DateRangePicker } from './DateRangePicker';
const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  title: 'Shared / Date / DateRangePicker',
};
export default meta;

type Story = StoryObj<typeof DateRangePicker>;
export const Primary: Story = {
  args: {
    initialStartDate: dayjs().subtract(1, 'week'),
    initialEndDate: dayjs(),
  },
};
