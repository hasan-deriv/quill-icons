import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.89 17.453q-.897-.117-.976-.976.078-.9.977-.977.86.078.937.977-.078.858-.937.976M19.689 15.5q-.04 2.695-1.329 4.883a9.7 9.7 0 0 1-3.476 3.476Q12.696 25.15 10 25.187q-2.695-.038-4.883-1.328a9.7 9.7 0 0 1-3.476-3.476Q.35 18.195.313 15.5q.038-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476Q7.305 5.85 10 5.813q2.696.038 4.883 1.328a9.7 9.7 0 0 1 3.476 3.476q1.29 2.187 1.328 4.883m-5.157-1.602q-.585 0-.937.391-1.367-.937-3.36-1.055l.664-3.046 2.188.468q.078.9.937.977.9-.078.977-.977-.078-.898-.977-.976a.99.99 0 0 0-.859.547l-2.383-.547q-.195 0-.273.195l-.742 3.36q-1.992.117-3.36 1.054-.351-.39-.937-.39-1.016.078-1.25.976-.195.899.703 1.484a2.1 2.1 0 0 0-.078.586q.078 1.602 1.523 2.617Q7.813 20.619 10 20.657q2.187-.039 3.672-1.093 1.445-1.017 1.523-2.618 0-.312-.078-.625.86-.546.664-1.445-.234-.899-1.25-.977m-2.695 4.532q-.626.547-1.836.547-1.211-.04-1.836-.547-.156-.117-.312 0-.157.195 0 .351.78.664 2.148.664t2.148-.664q.158-.156 0-.351-.156-.117-.312 0m.312-2.93q-.897.078-.976.977.078.858.976.976.86-.117.938-.976-.078-.9-.938-.977' />
    </g>
    <defs>
      <clipPath id='ec9dd60f8c6efd8ee950f5a048ffd2dd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditLgIcon);
export default ForwardRef;
