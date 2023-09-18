import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCommoditiesIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCommoditiesIcon',
  component: IllustrativeCommoditiesIcon,
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
} satisfies Meta<typeof IllustrativeCommoditiesIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCommoditiesIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
