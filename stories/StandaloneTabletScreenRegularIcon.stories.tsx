import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTabletScreenRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTabletScreenRegularIcon',
  component: StandaloneTabletScreenRegularIcon,
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
} satisfies Meta<typeof StandaloneTabletScreenRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTabletScreenRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
