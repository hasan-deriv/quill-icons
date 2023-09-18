import type { Meta, StoryObj } from '@storybook/react';

import { SocialTiktokBrandIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialTiktokBrandIcon',
  component: SocialTiktokBrandIcon,
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
} satisfies Meta<typeof SocialTiktokBrandIcon>;

export default meta;

type Story = StoryObj<typeof SocialTiktokBrandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
