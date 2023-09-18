import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownAZRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownAZRegularIcon',
  component: StandaloneArrowDownAZRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowDownAZRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownAZRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
