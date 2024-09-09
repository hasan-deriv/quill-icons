import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.25 6.563c-.187.312-.531.468-.875.375a2 2 0 0 0-2 .468 1.94 1.94 0 0 0-.469 1.969.82.82 0 0 1-.375.906C1.906 10.594 1.5 11.25 1.5 12c0 .781.406 1.438 1.031 1.75.313.188.469.531.375.875-.219.688-.031 1.438.5 1.969s1.281.718 1.969.5a.76.76 0 0 1 .875.375c.344.625 1 1.031 1.75 1.031s1.406-.406 1.719-1.031a.82.82 0 0 1 .906-.375c.656.218 1.438.031 1.969-.5a1.93 1.93 0 0 0 .469-1.969.76.76 0 0 1 .374-.875c.626-.344 1.063-1 1.063-1.75a1.93 1.93 0 0 0-1.062-1.719.82.82 0 0 1-.376-.906 1.94 1.94 0 0 0-.468-1.969 1.94 1.94 0 0 0-1.969-.468.82.82 0 0 1-.906-.375A1.93 1.93 0 0 0 8 5.5c-.781 0-1.437.438-1.75 1.063M8 4c1.094 0 2.094.531 2.75 1.375 1.031-.156 2.094.188 2.906.969a3.54 3.54 0 0 1 .969 2.906C15.469 9.906 16 10.906 16 12a3.4 3.4 0 0 1-1.375 2.75 3.41 3.41 0 0 1-.969 2.906 3.47 3.47 0 0 1-2.906 1C10.094 19.47 9.094 20 8 20a3.47 3.47 0 0 1-2.75-1.344c-1.031.125-2.125-.187-2.906-.968a3.47 3.47 0 0 1-1-2.907A3.57 3.57 0 0 1 0 12c0-1.094.531-2.094 1.344-2.75a3.54 3.54 0 0 1 .968-2.906 3.54 3.54 0 0 1 2.907-.969A3.51 3.51 0 0 1 8 4m3.531 6.531-4 4c-.312.313-.781.313-1.062 0l-2-2a.684.684 0 0 1 0-1.031c.281-.312.75-.312 1.062 0L7 12.969 10.469 9.5c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031' />
    </g>
    <defs>
      <clipPath id='2b57f306eb9d7b1b5e02e79c402c4ef1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckMdBoldIcon);
export default ForwardRef;
