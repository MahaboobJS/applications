import { ButtonsGrouped } from './ButtonsGrouped';
import { Styles } from '../../styles';

import type { StoryObj, Meta } from '@storybook/react';



const meta: Meta<typeof ButtonsGrouped> = {
  component: ButtonsGrouped,
  title: 'Shared / Tabs / ButtonsGrouped',
};
export default meta;

type Story = StoryObj<typeof ButtonsGrouped>;

export const Primary: Story = {
  args: {
    label: 'Grouped',
    data: [
      {
        buttonComponent: () => <div>Button 1</div>,
        contentComponent: () => <div>Content 1</div>,
        value: 'one',
        label: '1',
      },
      {
        buttonComponent: () => <div>Button 2</div>,
        contentComponent: () => <div>Content 2</div>,
        value: 'two',
        label: '2',
      },
    ],
  },
};

export const WithOutContent: Story = {
  args: {
    label: 'Grouped',
    data: [
      {
        buttonComponent: () => <div>Button 1</div>,
        value: 'one',
        label: '1',
      },
      {
        buttonComponent: () => <div>Button 2</div>,
        value: 'two',
        label: '2',
      },
    ],
  },
};

export const WithStyles: Story = {
  args: {
    label: 'Grouped',
    applyStylesFn: (isActive: boolean) => {
      return {
        color: isActive ? 'transparent' : Styles.colors.text.status.neutral,
        fontWeight: 'bold',
        backgroundColor: isActive
          ? `${Styles.colors.text.status.neutral} !important`
          : 'transparent',
        border: '1px solid #8299B1',
      };
    },
    data: [
      {
        buttonComponent: () => <div>Button 1</div>,
        value: 'one',
        label: '1',
      },
      {
        buttonComponent: () => <div>Button 2</div>,
        value: 'two',
        label: '2',
      },
    ],
  },
};
