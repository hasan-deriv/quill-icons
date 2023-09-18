import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeSoftwareDevelopersIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeSoftwareDevelopersIcon',
  component: IllustrativeSoftwareDevelopersIcon,
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
} satisfies Meta<typeof IllustrativeSoftwareDevelopersIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeSoftwareDevelopersIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
