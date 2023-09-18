import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneUnlockBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneUnlockBoldIcon',
  component: StandaloneUnlockBoldIcon,
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
} satisfies Meta<typeof StandaloneUnlockBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneUnlockBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
