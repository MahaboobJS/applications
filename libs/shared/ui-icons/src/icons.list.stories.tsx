
import { Icon } from './Icon';
import { IconsList } from './icons.list';

import type { StoryObj, Meta } from '@storybook/react';

function Icons() {
  return (
    <div>
      <Icon iconName={IconsList.backButton} />
      <Icon iconName={IconsList.expandArrow} />
      <Icon iconName={IconsList.notActive} />
      <Icon iconName={IconsList.editing} />
      <Icon iconName={IconsList.radioButton} />
      <Icon iconName={IconsList.radioButtonChecked} />
      <Icon iconName={IconsList.dashboard} />
      <Icon iconName={IconsList.sorting} />
      <Icon iconName={IconsList.sortingAscending} />
      <Icon iconName={IconsList.sortingDescending} />
      <Icon iconName={IconsList.search} />
      <Icon iconName={IconsList.home} />
      <Icon iconName={IconsList.calender} />
      <Icon iconName={IconsList.user} />
    </div>
  );
}

const meta: Meta<typeof Icons> = {
  component: Icons,
  title: 'Shared / Icons / List',
};

export default meta;

type Story = StoryObj<typeof Icons>;

export const Primary: Story = {
  args: {},
};
