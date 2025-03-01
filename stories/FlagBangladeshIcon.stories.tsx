import type { Meta, StoryObj } from '@storybook/react';

import { FlagBangladeshIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagBangladeshIcon',
  component: FlagBangladeshIcon,
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
} satisfies Meta<typeof FlagBangladeshIcon>;

export default meta;

type Story = StoryObj<typeof FlagBangladeshIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
