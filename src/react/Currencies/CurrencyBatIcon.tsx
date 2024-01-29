import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const CurrencyBatIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#8c7518cc4f763032944d02fbb1008c67__a)'>
      <path
        fill='#FF5000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16 6.167 4.978 22.7h22.044zm-3.674 12.859L16 13.516l3.674 5.51z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='8c7518cc4f763032944d02fbb1008c67__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyBatIcon);
export default ForwardRef;
