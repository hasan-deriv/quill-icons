import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleEightBoldIcon = (
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
        d='M14.5 12c0-1.188-.292-2.27-.875-3.25-.563-.98-1.354-1.77-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875c-1.02.604-1.813 1.396-2.375 2.375-.583.98-.875 2.063-.875 3.25 0 1.188.292 2.27.875 3.25.563.98 1.354 1.77 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875c1.02-.604 1.813-1.396 2.375-2.375.583-.98.875-2.063.875-3.25ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm8.25-4c.646.02 1.177.24 1.594.656.416.417.635.948.656 1.594 0 .5-.135.938-.406 1.313.583.479.885 1.124.906 1.937-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719h-1c-.708-.02-1.302-.26-1.781-.719C5.26 14.802 5.02 14.208 5 13.5c.02-.813.333-1.458.938-1.938A2.076 2.076 0 0 1 5.5 10.25c.02-.646.24-1.177.656-1.594.417-.416.948-.635 1.594-.656h.5Zm-.5 3h.5c.458-.042.708-.292.75-.75-.042-.458-.292-.708-.75-.75h-.5c-.458.042-.708.292-.75.75.042.458.292.708.75.75Zm.5 1.5H7.5a.974.974 0 0 0-.719.281.974.974 0 0 0-.281.719c0 .292.094.531.281.719a.974.974 0 0 0 .719.281h1a.974.974 0 0 0 .719-.281.974.974 0 0 0 .281-.719.974.974 0 0 0-.281-.719.974.974 0 0 0-.719-.281h-.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightBoldIcon);
export default ForwardRef;
