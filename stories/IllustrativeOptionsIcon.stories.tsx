import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeOptionsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeOptionsIcon',
  component: IllustrativeOptionsIcon,
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
} satisfies Meta<typeof IllustrativeOptionsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeOptionsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
