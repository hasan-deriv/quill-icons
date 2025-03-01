import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleStarFillIcon = (
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
        d='M0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm8-4.75a.442.442 0 0 0-.438.281L6.438 9.813l-2.53.374a.498.498 0 0 0-.407.344.457.457 0 0 0 .125.5l1.813 1.813-.438 2.5a.522.522 0 0 0 .219.5.537.537 0 0 0 .531.031L8 14.687l2.281 1.188a.482.482 0 0 0 .5-.031.522.522 0 0 0 .219-.5l-.438-2.5 1.844-1.781a.625.625 0 0 0 .125-.532.562.562 0 0 0-.406-.344l-2.531-.374L8.438 7.53A.442.442 0 0 0 8 7.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarFillIcon);
export default ForwardRef;
