import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 9.75h-4.5v4.5h4.5zM2.25 7.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 14.25v-4.5q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 7.5m4.5 14.25h-4.5v4.5h4.5zm-4.5-2.25h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 26.25v-4.5q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 19.5m12-9.75v4.5h4.5v-4.5zm-2.25 0q.047-.937.656-1.594A2.45 2.45 0 0 1 14.25 7.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 12 14.25zm-8.625 1.875q.046-.703.75-.75h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.703-.047-.75-.75zm.75 11.25h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.703-.046-.75-.75v-.75q.046-.704.75-.75m11.25-11.25q.047-.703.75-.75h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.703-.047-.75-.75zM12 20.25q.047-.704.75-.75h3q.704.046.75.75t.75.75h1.5q.704-.046.75-.75t.75-.75q.704.046.75.75v4.5q-.046.704-.75.75h-3q-.704-.046-.75-.75t-.75-.75q-.703.046-.75.75v3q-.047.704-.75.75h-1.5q-.703-.046-.75-.75zM17.25 27q.704.046.75.75-.046.704-.75.75-.704-.046-.75-.75.046-.704.75-.75m3 0q.704.046.75.75-.046.704-.75.75-.704-.046-.75-.75.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='7ccf58d52e29ff0c554550e98d1139c4__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeXlBoldIcon);
export default ForwardRef;
