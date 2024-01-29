import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodXanpoolBrandIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#5B69F2'>
      <path d='M25.845 53h-5.972c-.608 0-1.215-.31-1.519-.826L15.5 47.658l-2.854 4.516c-.304.516-.911.826-1.519.826H5.155a1.151 1.151 0 0 1-.91-1.86l6.712-10.668-6.774-10.716C3.677 28.93 4.285 28 5.196 28h6.275c.506 0 .911.207 1.114.62l2.915 4.633 2.915-4.633c.203-.413.608-.62 1.114-.62h6.275c.911 0 1.519.93 1.013 1.756l-6.774 10.716 6.713 10.669c.607.826 0 1.859-.911 1.859' />
      <path
        fillRule='evenodd'
        d='M45.286 47.286h-3.151l-1.261-3.257h-5.672l-1.156 3.257H31L36.567 33h3.046zm-5.357-5.778-1.891-5.357-1.89 5.357z'
        clipRule='evenodd'
      />
      <path d='M48.933 47.181V33h3.387l6.031 9.385V33h2.963v14.181H58.14l-6.244-9.906v9.906zM114 33v14.18h10v-2.73h-6.86V33z' />
      <path
        fillRule='evenodd'
        d='M67.468 41.783v5.503h-2.506V33h5.413c2.306 0 4.11 1.905 4.11 4.339s-1.804 4.338-4.11 4.338zm0-2.328h1.303c1.003 0 1.605-.106 1.905-.212.301-.105.602-.423.802-.74.2-.318.301-.741.301-1.164 0-.53-.1-.953-.401-1.27-.3-.318-.602-.53-1.003-.635-.3-.106-.902-.106-1.704-.106h-1.203zM92.419 40.143a7.12 7.12 0 0 1-7.143 7.143 7.12 7.12 0 0 1-7.143-7.143A7.12 7.12 0 0 1 85.276 33a7.12 7.12 0 0 1 7.143 7.143m-7.143-4.49c-2.452 0-4.477 2.04-4.477 4.49 0 2.449 2.025 4.49 4.477 4.49s4.478-2.041 4.478-4.49-2.026-4.49-4.478-4.49M103.21 47.286a7.12 7.12 0 0 0 7.142-7.143A7.12 7.12 0 0 0 103.21 33a7.12 7.12 0 0 0-7.143 7.143 7.12 7.12 0 0 0 7.143 7.143m-4.478-7.143c0-2.45 2.025-4.49 4.478-4.49s4.477 2.04 4.477 4.49c0 2.449-2.025 4.49-4.477 4.49s-4.478-2.041-4.478-4.49'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodXanpoolBrandIcon);
export default ForwardRef;
