import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedXlRegularIcon = (
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
      <path d='M23.813 7.734q.42.563-.047 1.079l-8.25 7.5q-.516.375-1.032-.047l-5.578-5.532-7.734 5.625q-.563.33-1.031-.187-.33-.563.187-1.031l8.25-6q.516-.33.938.093l5.53 5.485 7.688-7.031q.563-.423 1.078.046M3.75 26.25v-3q-.046-.704-.75-.75-.703.046-.75.75v3q.046.704.75.75.704-.046.75-.75M3 21q.937.047 1.594.656.61.657.656 1.594v3a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 3 28.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 .75 26.25v-3q.047-.937.656-1.594A2.45 2.45 0 0 1 3 21m6.75-2.25Q9.703 18.046 9 18q-.703.046-.75.75v7.5q.047.704.75.75.703-.046.75-.75zm-3 0q.047-.937.656-1.594A2.45 2.45 0 0 1 9 16.5q.937.047 1.594.656.61.657.656 1.594v7.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 9 28.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594zm9 7.5v-4.5q-.047-.704-.75-.75-.703.046-.75.75v4.5q.047.704.75.75.703-.046.75-.75M15 19.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 15 28.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594v-4.5q.047-.937.656-1.594A2.45 2.45 0 0 1 15 19.5m6.75-.75q-.046-.704-.75-.75-.704.046-.75.75v7.5q.046.704.75.75.704-.046.75-.75zm-3 0q.047-.937.656-1.594A2.45 2.45 0 0 1 21 16.5q.937.047 1.594.656.61.657.656 1.594v7.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 21 28.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594z' />
    </g>
    <defs>
      <clipPath id='3d93daa1f6267d1f6be1dc759b57e89c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedXlRegularIcon);
export default ForwardRef;
