import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderMdBoldIcon = (
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
      <path d='M0 5.75C0 4.813.781 4 1.75 4h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5a.246.246 0 0 0-.25.25v2.5A.74.74 0 0 1 .75 9 .72.72 0 0 1 0 8.25zm11-1a.74.74 0 0 1 .75-.75h2.5c.938 0 1.75.813 1.75 1.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-2.5a.27.27 0 0 0-.25-.25h-2.5a.72.72 0 0 1-.75-.75M.75 15a.76.76 0 0 1 .75.75v2.5c0 .156.094.25.25.25h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5C.781 20 0 19.219 0 18.25v-2.5A.74.74 0 0 1 .75 15m14.5 0a.76.76 0 0 1 .75.75v2.5c0 .969-.812 1.75-1.75 1.75h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5c.125 0 .25-.094.25-.25v-2.5a.74.74 0 0 1 .75-.75M7.5 10.75a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75m1.75.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75M8 8.5a3.5 3.5 0 0 0-3.031 1.75c-.657 1.094-.657 2.438 0 3.5A3.44 3.44 0 0 0 8 15.5c1.25 0 2.375-.656 3-1.75.656-1.062.656-2.406 0-3.5-.625-1.062-1.75-1.75-3-1.75M8 17a4.97 4.97 0 0 1-4.344-2.5 4.94 4.94 0 0 1 0-5C4.562 7.969 6.188 7 8 7c1.781 0 3.406.969 4.313 2.5a4.94 4.94 0 0 1 0 5A4.96 4.96 0 0 1 8 17m-1.312-4.25c.25.469.75.75 1.312.75.531 0 1.031-.281 1.281-.75.156-.219.438-.312.688-.156.25.125.312.437.187.687-.437.719-1.25 1.25-2.156 1.25-.937 0-1.75-.531-2.187-1.25-.125-.25-.063-.562.187-.687a.494.494 0 0 1 .688.156' />
    </g>
    <defs>
      <clipPath id='50a2b841625edb0ef327dba64837989a__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderMdBoldIcon);
export default ForwardRef;
