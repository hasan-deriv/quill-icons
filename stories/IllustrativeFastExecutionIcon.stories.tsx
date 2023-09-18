import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeFastExecutionIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeFastExecutionIcon',
  component: IllustrativeFastExecutionIcon,
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
} satisfies Meta<typeof IllustrativeFastExecutionIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeFastExecutionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
