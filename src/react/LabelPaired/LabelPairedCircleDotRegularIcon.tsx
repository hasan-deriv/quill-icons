import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleDotRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.938-3.5A7.191 7.191 0 0 0 11.5 5.937a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.937 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm10 0c-.02-.75-.354-1.323-1-1.719-.667-.375-1.333-.375-2 0-.646.396-.98.969-1 1.719.02.75.354 1.323 1 1.719.667.375 1.333.375 2 0 .646-.396.98-.969 1-1.719Zm-5 0c0-.542.135-1.042.406-1.5A3.007 3.007 0 0 1 8 9a3.007 3.007 0 0 1 2.594 1.5c.27.458.406.958.406 1.5s-.135 1.042-.406 1.5A3.007 3.007 0 0 1 8 15a3.007 3.007 0 0 1-2.594-1.5A2.895 2.895 0 0 1 5 12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotRegularIcon);
export default ForwardRef;
