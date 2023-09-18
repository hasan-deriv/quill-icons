import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSterlingSignBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneSterlingSignBoldIcon',
  component: StandaloneSterlingSignBoldIcon,
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
} satisfies Meta<typeof StandaloneSterlingSignBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSterlingSignBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
