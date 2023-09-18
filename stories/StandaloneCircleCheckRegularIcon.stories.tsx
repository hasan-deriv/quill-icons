import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleCheckRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleCheckRegularIcon',
  component: StandaloneCircleCheckRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleCheckRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleCheckRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
