import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownLeftRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 17c-.313-.02-.48-.188-.5-.5v-7c.02-.313.188-.48.5-.5.313.02.48.188.5.5v5.781l8.156-8.125c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L2.719 16H8.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-7Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftRegularIcon);
export default ForwardRef;
