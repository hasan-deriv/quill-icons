import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M10.875 5.5h-8.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v8.75q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-8.75a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246m-8.75-.875h8.75q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52' />
    </g>
    <defs>
      <clipPath id='803c5df50e38c6770e79991b68c6028b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareSmRegularIcon);
export default ForwardRef;
