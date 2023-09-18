import type { Meta, StoryObj } from '@storybook/react';

import { FlagLatviaIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagLatviaIcon',
  component: FlagLatviaIcon,
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
} satisfies Meta<typeof FlagLatviaIcon>;

export default meta;

type Story = StoryObj<typeof FlagLatviaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
