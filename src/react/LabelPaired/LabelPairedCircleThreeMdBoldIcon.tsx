import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeMdBoldIcon = (
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
      <path d='M8 5.5c-2.344 0-4.469 1.25-5.656 3.25a6.52 6.52 0 0 0 0 6.5A6.51 6.51 0 0 0 8 18.5c2.313 0 4.438-1.219 5.625-3.25a6.52 6.52 0 0 0 0-6.5C12.438 6.75 10.313 5.5 8 5.5M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5.75 8h4c.281 0 .563.219.688.5a.79.79 0 0 1-.188.813L8.656 10.78A2.61 2.61 0 0 1 11 13.375C11 14.844 9.813 16 8.344 16H7.5a2.66 2.66 0 0 1-2.312-1.281l-.094-.125c-.219-.344-.094-.813.25-1.031.343-.22.812-.094 1.031.25l.094.124c.218.376.593.594 1.031.594h.844c.625 0 1.156-.531 1.156-1.156s-.531-1.125-1.156-1.125H6.75c-.312.031-.594-.156-.719-.469-.093-.281-.031-.625.188-.812L7.812 9.5H5.75A.72.72 0 0 1 5 8.75.74.74 0 0 1 5.75 8' />
    </g>
    <defs>
      <clipPath id='999eff13922e496fb9efb18f965ed0d0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeMdBoldIcon);
export default ForwardRef;
