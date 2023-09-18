import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedScissorsBoldIcon = (
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
        d='M15.813 17.719c-.313.333-.657.364-1.032.093L9.75 13.625l1.188-.969 4.78 4.031c.334.313.365.657.095 1.032ZM3.5 5.5c-.75.02-1.323.354-1.719 1-.375.667-.375 1.333 0 2 .396.646.969.98 1.719 1 .75-.02 1.323-.354 1.719-1 .375-.667.375-1.333 0-2-.396-.646-.969-.98-1.719-1Zm0-1.5c1 .02 1.823.365 2.469 1.031C6.635 5.677 6.979 6.5 7 7.5c0 .563-.125 1.083-.375 1.563L9 11.03l5.781-4.844c.375-.27.719-.24 1.031.094.271.375.24.719-.093 1.032l-9.094 7.625c.25.479.375 1 .375 1.562-.02 1-.365 1.823-1.031 2.469C5.323 19.635 4.5 19.979 3.5 20c-1-.02-1.823-.365-2.469-1.031C.365 18.323.021 17.5 0 16.5c.02-1 .365-1.823 1.031-2.469C1.677 13.365 2.5 13.021 3.5 13c.854.02 1.583.281 2.188.781L7.813 12l-2.125-1.781c-.605.5-1.334.76-2.188.781-1-.02-1.823-.365-2.469-1.031C.365 9.323.021 8.5 0 7.5c.02-1 .365-1.823 1.031-2.469C1.677 4.365 2.5 4.021 3.5 4Zm2 12.5c-.02-.75-.354-1.323-1-1.719-.667-.375-1.333-.375-2 0-.646.396-.98.969-1 1.719.02.75.354 1.323 1 1.719.667.375 1.333.375 2 0 .646-.396.98-.969 1-1.719Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsBoldIcon);
export default ForwardRef;
