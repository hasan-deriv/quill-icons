import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const MarketStocksDeltaAirLinesIcon = (
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
    <g clipPath='url(#31ef252a29b39384c22fb601f380cc2d__a)'>
      <path
        fill='#203C6A'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path fill='#fff' d='M6.625 21.375 16 7c3.605 5.553 9.375 14.375 9.375 14.375L16 17z' />
      <path fill='#fff' d='M6 23.25h20l-10-4.375z' />
    </g>
    <defs>
      <clipPath id='31ef252a29b39384c22fb601f380cc2d__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksDeltaAirLinesIcon);
export default ForwardRef;
