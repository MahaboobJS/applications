import { Select } from './Select';
import { Styles } from '../../styles';

import type { StoryObj, Meta } from '@storybook/react';



const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Shared / Select / Select',
};
export default meta;
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
const style = {
  layoutSxprops: {
    width: '250px',
    height: '100%',
  },
  selectSxProps: {
    color: 'inherit',
    borderBottom: `0.5px solid ${Styles.colors.text.interactive.default}`,
    '&::after': { borderBottom: `none` },
    '& .MuiSelect-icon': { color: 'inherit' },
  },
};

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select',
    options,
  },
};

export const WitoutWidth: Story = {
  args: {
    label: 'CustomSelect',
    options,
  },
};

export const CustomStyles: Story = {
  args: {
    label: 'CustomSelect',
    options,
    layoutSx: {
      ...style.layoutSxprops,
      color: Styles.colors.text.interactive.default,
      backgroundColor: '#003674',
    },
    selectSx: style.selectSxProps,
  },
};
