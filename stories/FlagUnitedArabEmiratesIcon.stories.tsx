import type { Meta, StoryObj } from '@storybook/react';

import { FlagUnitedArabEmiratesIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagUnitedArabEmiratesIcon',
  component: FlagUnitedArabEmiratesIcon,
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
} satisfies Meta<typeof FlagUnitedArabEmiratesIcon>;

export default meta;

type Story = StoryObj<typeof FlagUnitedArabEmiratesIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
