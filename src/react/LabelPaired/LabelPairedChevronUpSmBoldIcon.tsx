import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6.535 6.785q.465-.383.93 0l5.25 5.25q.383.465 0 .93-.465.383-.93 0L7 8.18l-4.785 4.785q-.465.383-.93 0-.383-.465 0-.93z' />
    </g>
    <defs>
      <clipPath id='bfa01b06b9b75d67f48355fd46012f61__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpSmBoldIcon);
export default ForwardRef;
