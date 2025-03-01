import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMessagesQuestionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMessagesQuestionRegularIcon',
  component: LabelPairedMessagesQuestionRegularIcon,
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
} satisfies Meta<typeof LabelPairedMessagesQuestionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMessagesQuestionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
