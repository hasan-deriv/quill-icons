import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneStopLossBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneStopLossBoldIcon',
  component: StandaloneStopLossBoldIcon,
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
} satisfies Meta<typeof StandaloneStopLossBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneStopLossBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
