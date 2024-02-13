import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m23.625 9.469-7.875 6.75q-.75.563-1.5 0L8.906 11.53l-7.172 4.781q-.89.47-1.546-.328-.47-.89.328-1.546l7.875-5.25q.703-.422 1.359.093L15 13.875l7.125-6.094q.844-.61 1.594.094.61.844-.094 1.594M9.375 26.25v-7.5q-.047-.329-.375-.375-.328.046-.375.375v7.5q.047.329.375.375.328-.046.375-.375M9 16.5q.937.047 1.594.656.61.657.656 1.594v7.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 9 28.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594v-7.5q.047-.937.656-1.594A2.45 2.45 0 0 1 9 16.5m-5.625 9.75v-3q-.046-.329-.375-.375-.328.046-.375.375v3q.046.329.375.375.329-.046.375-.375M3 21q.937.047 1.594.656.61.657.656 1.594v3a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 3 28.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 .75 26.25v-3q.047-.937.656-1.594A2.45 2.45 0 0 1 3 21m12.375.75q-.047-.329-.375-.375-.328.046-.375.375v4.5q.047.329.375.375.328-.046.375-.375zm-2.625 0q.047-.937.656-1.594A2.45 2.45 0 0 1 15 19.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 15 28.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594zm8.625 4.5v-7.5q-.046-.329-.375-.375-.329.046-.375.375v7.5q.046.329.375.375.329-.046.375-.375M21 16.5q.937.047 1.594.656.61.657.656 1.594v7.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 21 28.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594v-7.5q.047-.937.656-1.594A2.45 2.45 0 0 1 21 16.5' />
    </g>
    <defs>
      <clipPath id='3692f7d5ceb951e4fe840112f12c32d5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedXlBoldIcon);
export default ForwardRef;
