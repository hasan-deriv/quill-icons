import type { Meta, StoryObj } from '@storybook/react';

import { SocialLinkedinIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialLinkedinIcon',
  component: SocialLinkedinIcon,
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
} satisfies Meta<typeof SocialLinkedinIcon>;

export default meta;

type Story = StoryObj<typeof SocialLinkedinIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
