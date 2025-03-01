import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopLossBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.688 16.344c-.75 0-1.375-.125-1.875-.375-.532-.25-.938-.594-1.313-.969l1.188-1.219c.593.625 1.28.969 2.125.969.437 0 .78-.094.968-.281a.951.951 0 0 0 .344-.75.873.873 0 0 0-.188-.563c-.125-.156-.406-.281-.78-.312l-.845-.125c-.875-.125-1.53-.375-1.937-.813-.406-.406-.625-.969-.625-1.687 0-.375.063-.719.219-1.031.156-.313.344-.563.625-.782.25-.25.593-.406.968-.531a4.505 4.505 0 0 1 1.344-.188c.625 0 1.188.094 1.657.313a3.14 3.14 0 0 1 1.25.875l-1.22 1.219c-.218-.25-.437-.438-.75-.563-.28-.156-.624-.25-1.062-.25-.406 0-.718.094-.906.219-.188.156-.313.344-.313.625s.094.469.25.625c.157.125.407.219.75.25l.844.156c.844.125 1.5.375 1.907.781.437.407.624.97.624 1.688 0 .406-.062.781-.218 1.094-.125.344-.344.625-.625.875s-.625.437-1.031.562a4.72 4.72 0 0 1-1.376.188Zm4.78-.157V7.813h1.813v6.782h3.188v1.594h-5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossBoldIcon);
export default ForwardRef;
