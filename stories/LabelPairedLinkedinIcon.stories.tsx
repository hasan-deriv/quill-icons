import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkedinIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkedinIcon',
  component: LabelPairedLinkedinIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelPairedLinkedinIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkedinIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
