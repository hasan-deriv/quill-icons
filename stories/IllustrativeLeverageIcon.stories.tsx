import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeLeverageIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeLeverageIcon',
  component: IllustrativeLeverageIcon,
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
} satisfies Meta<typeof IllustrativeLeverageIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeLeverageIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
