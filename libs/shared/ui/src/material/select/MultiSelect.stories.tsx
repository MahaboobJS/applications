import { Meta, StoryObj } from '@storybook/react';

import { MultiSelect, MultiSelectOption } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  title: 'Shared / Select / MultiSelect',
};
export default meta;

const Template: Story['render'] = (args) => {
  return <MultiSelect {...args} />;
};

function onChange(type: string, value: string) {
  if (!type || !value) {
    return Promise.resolve(false);
  }
  return Promise.resolve(true);
}

type Story = StoryObj<typeof MultiSelect>;

const options: MultiSelectOption<string>[] = [
  { id: '1', value: '1', name: 'Option 1' },
  { id: '2', value: '2', name: 'Option 2' },
  { id: '3', value: '3', name: 'Option 3' },
];

const selectedValuesWithValue: MultiSelectOption<string>[] = [
  { id: '0', value: '0', name: 'default' },
];
const selectedValuesWithoutValue: MultiSelectOption<string>[] = [];

export const Primary: Story = {
  render: Template,
  args: {
    options,
    selectedValues: selectedValuesWithValue,
    onChange,
  },
};

export const WithoutValue: Story = {
  render: Template,
  args: {
    options,
    selectedValues: selectedValuesWithoutValue,
    onChange,
  },
};
