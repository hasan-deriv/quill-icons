import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodXanpoolWhiteIcon = (
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
    <g fill='#fff'>
      <path d='M25.845 53h-5.972c-.608 0-1.215-.31-1.519-.826L15.5 47.658l-2.854 4.516c-.304.516-.911.826-1.519.826H5.155a1.151 1.151 0 0 1-.91-1.86l6.712-10.668-6.774-10.716C3.677 28.93 4.285 28 5.196 28h6.275c.506 0 .911.207 1.114.62l2.915 4.633 2.915-4.633c.203-.413.608-.62 1.114-.62h6.275c.911 0 1.519.93 1.013 1.756l-6.774 10.716 6.713 10.669c.607.826 0 1.859-.911 1.859' />
      <path
        fillRule='evenodd'
        d='M42.135 47.286h3.15L39.614 33h-3.046L31 47.286h3.046l1.156-3.257h5.672zM38.038 36.15l1.89 5.357h-3.78z'
        clipRule='evenodd'
      />
      <path d='M48.933 33v14.181h2.963v-9.906l6.244 9.906h3.174V33h-2.963v9.385L52.32 33zM114 47.18V33h3.14v11.45H124v2.73z' />
      <path
        fillRule='evenodd'
        d='M67.468 47.286v-5.503l2.907-.106c2.306 0 4.11-1.904 4.11-4.338S72.682 33 70.376 33h-5.413v14.286zm1.303-7.831h-1.303v-4.127h1.203c.802 0 1.404 0 1.704.106.401.106.702.317 1.003.635.3.317.401.74.401 1.27 0 .423-.1.846-.3 1.164-.201.317-.502.635-.803.74-.3.106-.902.212-1.905.212M85.276 47.286a7.12 7.12 0 0 0 7.143-7.143A7.12 7.12 0 0 0 85.276 33a7.12 7.12 0 0 0-7.143 7.143 7.12 7.12 0 0 0 7.143 7.143M80.8 40.143c0-2.45 2.025-4.49 4.477-4.49s4.478 2.04 4.478 4.49c0 2.449-2.026 4.49-4.478 4.49s-4.477-2.041-4.477-4.49M110.352 40.143a7.12 7.12 0 0 1-7.142 7.143 7.12 7.12 0 0 1-7.143-7.143A7.12 7.12 0 0 1 103.21 33a7.12 7.12 0 0 1 7.142 7.143m-7.142-4.49c-2.453 0-4.478 2.04-4.478 4.49 0 2.449 2.025 4.49 4.478 4.49s4.477-2.041 4.477-4.49-2.025-4.49-4.477-4.49'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodXanpoolWhiteIcon);
export default ForwardRef;
