import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowsRotateRegularIcon = (
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
        d='M2.156 10.594h.031c-.083.25-.26.385-.53.406-.355-.042-.511-.23-.47-.563.375-1.583 1.188-2.874 2.438-3.874C4.855 5.563 6.313 5.042 8 5c1.292.02 2.458.333 3.5.938A6.925 6.925 0 0 1 14 8.405V6.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v3c-.02.313-.188.48-.5.5h-3c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h1.688a5.87 5.87 0 0 0-2.157-2.188C10.135 6.293 9.125 6.021 8 6c-1.438.02-2.688.458-3.75 1.313-1.042.833-1.74 1.927-2.094 3.28Zm11.688 2.844v-.032c.062-.25.229-.385.5-.406.354.042.51.23.469.563-.376 1.583-1.178 2.874-2.407 3.874-1.25 1-2.719 1.521-4.406 1.563-1.292-.02-2.458-.333-3.5-.938A7.008 7.008 0 0 1 2 15.626V17.5c-.02.313-.188.48-.5.5-.292-.02-.458-.188-.5-.5v-3c.042-.313.208-.48.5-.5h3c.313.02.48.188.5.5-.02.313-.188.48-.5.5H2.812a5.87 5.87 0 0 0 2.157 2.188c.896.52 1.906.791 3.031.812 1.438-.02 2.688-.458 3.75-1.313 1.042-.833 1.74-1.916 2.094-3.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateRegularIcon);
export default ForwardRef;
