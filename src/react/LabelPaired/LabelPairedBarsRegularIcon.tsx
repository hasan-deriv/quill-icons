import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 6.5c.02-.313.188-.48.5-.5h13c.313.02.48.188.5.5-.02.313-.188.48-.5.5H.5c-.313-.02-.48-.188-.5-.5Zm0 5c.02-.313.188-.48.5-.5h13c.313.02.48.188.5.5-.02.313-.188.48-.5.5H.5c-.313-.02-.48-.188-.5-.5Zm14 5c-.02.313-.188.48-.5.5H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h13c.313.02.48.188.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsRegularIcon);
export default ForwardRef;
