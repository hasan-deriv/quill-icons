import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeBasketIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeBasketIcon',
  component: IllustrativeBasketIcon,
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
} satisfies Meta<typeof IllustrativeBasketIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeBasketIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
