import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleArrowUpRightBoldIcon = (
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
        d='M8 18.5c1.188 0 2.27-.292 3.25-.875.98-.563 1.77-1.354 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25c-.604-1.02-1.396-1.813-2.375-2.375C10.27 5.792 9.187 5.5 8 5.5c-1.188 0-2.27.292-3.25.875-.98.563-1.77 1.354-2.375 2.375A6.45 6.45 0 0 0 1.5 12c0 1.146.292 2.23.875 3.25.604 1.02 1.396 1.813 2.375 2.375.98.583 2.063.875 3.25.875ZM8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.063 4c-.75 1.25-1.729 2.23-2.937 2.938-1.208.687-2.542 1.041-4 1.062-1.458-.02-2.792-.375-4-1.063C2.792 18.23 1.812 17.25 1.062 16 .355 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.062 5.208 4.375 6.542 4.021 8 4ZM6 8.5h4.75c.458.042.708.292.75.75v5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3.188l-4.219 4.22c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063L8.937 10H6c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightBoldIcon);
export default ForwardRef;
