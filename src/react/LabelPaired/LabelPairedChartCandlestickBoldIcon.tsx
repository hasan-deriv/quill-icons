import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartCandlestickBoldIcon = (
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
        d='M1.5 5.75v11c.042.458.292.708.75.75h13c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-13c-.646-.02-1.177-.24-1.594-.656C.24 17.927.021 17.396 0 16.75v-11c.042-.458.292-.708.75-.75.458.042.708.292.75.75ZM10 5.5V7c.292 0 .531.094.719.281A.974.974 0 0 1 11 8v3a.974.974 0 0 1-.281.719A.974.974 0 0 1 10 12v1.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V12a.974.974 0 0 1-.719-.281A.974.974 0 0 1 8 11V8c0-.292.094-.531.281-.719A.973.973 0 0 1 9 7V5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5Zm2 5.5c0-.292.094-.531.281-.719A.974.974 0 0 1 13 10V8.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V10c.292 0 .531.094.719.281A.974.974 0 0 1 15 11v2a.974.974 0 0 1-.281.719A.974.974 0 0 1 14 14v1.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V14a.974.974 0 0 1-.719-.281A.974.974 0 0 1 12 13v-2ZM5 8V6.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V8c.292 0 .531.094.719.281A.973.973 0 0 1 7 9v4a.974.974 0 0 1-.281.719A.974.974 0 0 1 6 14v1.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V14a.974.974 0 0 1-.719-.281A.974.974 0 0 1 4 13V9c0-.292.094-.531.281-.719A.973.973 0 0 1 5 8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickBoldIcon);
export default ForwardRef;
