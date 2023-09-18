import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBlackLogoHorizontalIcon',
  component: DerivProductDerivEzBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
