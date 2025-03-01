import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDinersClubInternationalBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDinersClubInternationalBrandLightIcon',
  component: PaymentMethodDinersClubInternationalBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDinersClubInternationalBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDinersClubInternationalBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
