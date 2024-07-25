import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.035 15.043 8.45 13.457c-.437.246-.93.355-1.449.355-.547 0-1.04-.109-1.477-.355l-1.585 1.586a5.333 5.333 0 0 0 6.098 0m2.461.027h.027c.247.328.192.82-.109 1.121-.3.301-.793.329-1.121.082A6.97 6.97 0 0 1 7 17.75a7 7 0 0 1-4.32-1.477.87.87 0 0 1-1.121-.082.87.87 0 0 1-.082-1.12A7 7 0 0 1 0 10.75c0-1.613.547-3.09 1.477-4.293a.87.87 0 0 1 .082-1.121c.3-.3.793-.356 1.12-.11C3.884 4.325 5.36 3.75 7 3.75c1.613 0 3.09.574 4.293 1.477.328-.247.82-.192 1.121.109.3.3.328.793.082 1.121a6.97 6.97 0 0 1 1.477 4.293c0 1.64-.547 3.117-1.477 4.32m-1.23-1.258c.601-.874.984-1.914.984-3.062 0-1.121-.383-2.16-.984-3.035L9.68 9.3c.246.437.355.93.355 1.449 0 .547-.11 1.04-.355 1.477zm-1.23-7.328C9.16 5.883 8.12 5.5 7 5.5c-1.148 0-2.187.383-3.062.984L5.523 8.07c.438-.246.93-.383 1.45-.383.547 0 1.039.137 1.476.383zm-5.743 5.743a2.9 2.9 0 0 1-.356-1.45c0-.546.11-1.039.356-1.476L2.707 7.715a5.33 5.33 0 0 0 0 6.098zm1.394-1.477c0 .492.247.902.657 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148 0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121' />
    </g>
    <defs>
      <clipPath id='a8851a7abdf1099fe7f8093ca1415c3b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingSmFillIcon);
export default ForwardRef;
