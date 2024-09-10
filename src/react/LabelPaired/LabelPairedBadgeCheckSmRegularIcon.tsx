import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckSmRegularIcon = (
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
      <path d='M5.195 5.719a.444.444 0 0 1-.52.218 2.01 2.01 0 0 0-2.023.493 2.01 2.01 0 0 0-.492 2.023.444.444 0 0 1-.219.52C1.285 9.3.875 9.984.875 10.75c0 .793.41 1.45 1.066 1.805.192.11.274.3.22.52a2.01 2.01 0 0 0 .491 2.023c.547.547 1.34.71 2.024.492.219-.055.437.027.52.219A2.01 2.01 0 0 0 7 16.875c.766 0 1.45-.41 1.777-1.066a.46.46 0 0 1 .52-.22 2.01 2.01 0 0 0 2.023-.491c.547-.547.711-1.34.492-2.024-.054-.219.028-.437.22-.52.656-.355 1.093-1.011 1.093-1.804a1.99 1.99 0 0 0-1.094-1.777.46.46 0 0 1-.219-.52 2.01 2.01 0 0 0-.492-2.023 2.01 2.01 0 0 0-2.023-.492.444.444 0 0 1-.52-.22A1.99 1.99 0 0 0 7 4.626c-.793 0-1.45.438-1.805 1.094M7 3.75c.984 0 1.86.52 2.379 1.258.902-.164 1.86.11 2.57.793.684.71.957 1.668.793 2.57C13.48 8.891 14 9.766 14 10.75c0 1.012-.52 1.86-1.258 2.406.164.903-.11 1.86-.793 2.543a2.89 2.89 0 0 1-2.57.82A2.91 2.91 0 0 1 7 17.75c-1.012 0-1.86-.492-2.406-1.23a2.81 2.81 0 0 1-2.543-.82 2.81 2.81 0 0 1-.82-2.544C.491 12.61 0 11.762 0 10.75c0-.984.492-1.86 1.23-2.379-.164-.902.11-1.86.82-2.57a2.87 2.87 0 0 1 2.544-.793C5.14 4.27 5.988 3.75 7 3.75m2.926 5.578-3.5 3.5a.463.463 0 0 1-.63 0l-1.75-1.75a.463.463 0 0 1 0-.629.463.463 0 0 1 .63 0l1.449 1.45 3.172-3.2a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63' />
    </g>
    <defs>
      <clipPath id='c8a3d8724b325a5ccb74da6b11bf7e61__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckSmRegularIcon);
export default ForwardRef;
