import type { Meta, StoryObj } from '@storybook/react';

import { FlagHungaryIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagHungaryIcon',
  component: FlagHungaryIcon,
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
} satisfies Meta<typeof FlagHungaryIcon>;

export default meta;

type Story = StoryObj<typeof FlagHungaryIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
