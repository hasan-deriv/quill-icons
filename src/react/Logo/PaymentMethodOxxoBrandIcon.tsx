import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodOxxoBrandIcon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#EFA616'
        d='M24 22.698C24.004 21.206 25.121 20 26.498 20h75.11c1.377 0 2.494 1.206 2.499 2.698V57.3c-.005 1.492-1.122 2.699-2.499 2.699h-75.11c-1.377 0-2.494-1.206-2.498-2.699z'
      />
      <path fill='#fff' d='M24 23.923h80.122v32.154H24z' />
      <path
        fill='#E20613'
        d='M91.9 32.29c-3.678 0-6.658 3.229-6.658 7.212s2.98 7.212 6.657 7.212 6.657-3.23 6.657-7.212c-.004-3.981-2.983-7.208-6.657-7.212m-54.839 0c-2.693-.004-5.123 1.752-6.156 4.446s-.466 5.797 1.438 7.863c1.903 2.063 4.767 2.682 7.256 1.566s4.111-3.746 4.111-6.663c-.005-3.978-2.977-7.202-6.649-7.212'
      />
      <path
        fill='#E20613'
        d='M91.378 25.928c-6.16-.146-9.053 4.128-13.26 9.421l-3.953 4.976 6.278 8.145c1.494 2.502-1.36 4.985-3.163 2.7l-5.803-7.505-5.661 7.101c-1.795 2.261-4.617-.265-3.091-2.74l6.135-7.71-4.008-5.241 2.585-3.426 4.088 5.319 3.525-4.445c1.733-2.176 3.496-5.063 5.788-6.553H24v28.102h13.29c6.167 0 8.958-3.99 13.045-9.37l3.86-5.079-6.444-7.982c-1.582-2.468 1.249-5.02 3.067-2.776l5.962 7.358 5.533-7.246c1.756-2.304 4.633.154 3.163 2.663l-5.969 7.89 4.127 5.138-2.601 3.34-4.111-5.019-3.432 4.522c-1.684 2.228-3.392 5.063-5.645 6.605h56.316v-28.19H91.378zm-43.81 13.559c0 4.607-2.562 8.762-6.493 10.524-3.93 1.763-8.453.787-11.46-2.473s-3.904-8.16-2.275-12.418c1.63-4.256 5.467-7.03 9.721-7.026 5.8.014 10.499 5.108 10.507 11.393m44.33 11.382c-4.253 0-8.088-2.776-9.715-7.034s-.725-9.159 2.283-12.416c3.01-3.257 7.533-4.23 11.462-2.463 3.93 1.765 6.49 5.921 6.487 10.53-.013 6.284-4.715 11.374-10.516 11.383'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodOxxoBrandIcon);
export default ForwardRef;
