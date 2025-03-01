import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleSevenRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 5a7.204 7.204 0 0 0-3.5.938A7.191 7.191 0 0 0 1.937 8.5a6.999 6.999 0 0 0 0 7A7.191 7.191 0 0 0 4.5 18.063 7.203 7.203 0 0 0 8 19a7.203 7.203 0 0 0 3.5-.938 7.191 7.191 0 0 0 2.563-2.562 7 7 0 0 0 0-7A7.19 7.19 0 0 0 11.5 5.937 7.204 7.204 0 0 0 8 5Zm0 15c-1.458-.02-2.792-.375-4-1.063C2.792 18.23 1.812 17.25 1.062 16 .355 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.062 5.208 4.375 6.542 4.021 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.063 4c-.75 1.25-1.729 2.23-2.937 2.938-1.208.687-2.542 1.041-4 1.062ZM5.5 8h5a.49.49 0 0 1 .438.25.531.531 0 0 1 0 .5l-4 7c-.188.25-.417.313-.688.188-.25-.188-.313-.417-.188-.688L9.626 9H5.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSevenRegularIcon);
export default ForwardRef;
