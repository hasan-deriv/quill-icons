import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleSterlingRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.938-3.5A7.191 7.191 0 0 0 11.5 5.937a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.937 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm8.125-3.5c-.333 0-.604.115-.813.344-.208.208-.322.479-.343.812L7 11h1.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H7a4.8 4.8 0 0 1-.563 2h3.813c.313.02.48.188.5.5-.02.313-.188.48-.5.5H5.5a.49.49 0 0 1-.438-.25.536.536 0 0 1 .032-.531l.281-.406A3.643 3.643 0 0 0 6 12h-.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5H6l-.031-1.344c.02-.604.229-1.114.625-1.531.396-.396.906-.604 1.531-.625.333 0 .646.073.938.219l.656.343c.27.167.344.386.219.657-.146.27-.365.344-.657.219l-.656-.313a1.11 1.11 0 0 0-.5-.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingRegularIcon);
export default ForwardRef;
