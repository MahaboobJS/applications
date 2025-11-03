import { CheckBox } from './CheckBox';

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: 'Shared / Checkbox / CheckboxWithLabel',
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    label: 'Enable Feature',
    checked: false,
    onChange: (checked: boolean) => console.log(`Checkbox state: ${checked}`),
  },
};
