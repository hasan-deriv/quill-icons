import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleInfoXlRegularIcon = (
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
      <path d='M12 7.5q-2.859.047-5.25 1.406-2.39 1.407-3.844 3.844Q1.5 15.234 1.5 18t1.406 5.25q1.453 2.437 3.844 3.844Q9.141 28.454 12 28.5q2.859-.047 5.25-1.406 2.39-1.407 3.844-3.844Q22.5 20.766 22.5 18t-1.406-5.25q-1.453-2.437-3.844-3.844Q14.859 7.546 12 7.5M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m-2.25-7.5h1.5V18h-1.125q-.703-.046-.75-.75.047-.704.75-.75H12q.703.046.75.75v5.25h1.5q.703.046.75.75-.047.704-.75.75h-4.5q-.703-.046-.75-.75.047-.704.75-.75M12 14.625q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125 1.032.095 1.125 1.125-.093 1.032-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='5d59a70f824dedbc8d428ccbb6eaea34__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleInfoXlRegularIcon);
export default ForwardRef;
