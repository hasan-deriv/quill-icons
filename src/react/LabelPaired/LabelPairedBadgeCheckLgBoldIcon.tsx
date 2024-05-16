import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckLgBoldIcon = (
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
      <path d='M7.813 8.703c-.235.39-.665.586-1.094.469a2.5 2.5 0 0 0-2.5.586 2.43 2.43 0 0 0-.586 2.46c.117.43-.078.9-.469 1.134-.781.39-1.289 1.21-1.289 2.148 0 .977.508 1.797 1.29 2.188.39.234.585.664.468 1.093-.274.86-.04 1.797.625 2.461.664.664 1.601.899 2.46.625.43-.117.9.078 1.095.469.43.781 1.25 1.289 2.187 1.289.938 0 1.758-.508 2.148-1.29.235-.39.704-.585 1.133-.468.82.274 1.797.04 2.461-.625.664-.664.86-1.601.586-2.46-.117-.43.078-.9.469-1.094.781-.43 1.328-1.25 1.328-2.188 0-.937-.547-1.758-1.328-2.148a1.02 1.02 0 0 1-.469-1.133 2.43 2.43 0 0 0-.586-2.461 2.43 2.43 0 0 0-2.46-.586 1.02 1.02 0 0 1-1.134-.469A2.41 2.41 0 0 0 10 7.375c-.977 0-1.797.547-2.187 1.328M10 5.5c1.367 0 2.617.664 3.438 1.719 1.289-.196 2.617.234 3.632 1.21a4.43 4.43 0 0 1 1.211 3.633c1.055.82 1.719 2.07 1.719 3.438a4.26 4.26 0 0 1-1.719 3.438 4.26 4.26 0 0 1-1.21 3.632 4.33 4.33 0 0 1-3.634 1.25c-.82 1.016-2.07 1.68-3.437 1.68a4.33 4.33 0 0 1-3.437-1.68c-1.29.157-2.657-.234-3.633-1.21a4.33 4.33 0 0 1-1.25-3.633A4.47 4.47 0 0 1 0 15.5c0-1.367.664-2.617 1.68-3.437A4.43 4.43 0 0 1 2.89 8.43a4.43 4.43 0 0 1 3.633-1.211C7.343 6.164 8.593 5.5 10 5.5m4.414 8.164-5 5c-.39.39-.976.39-1.328 0l-2.5-2.5a.856.856 0 0 1 0-1.289c.351-.39.937-.39 1.328 0l1.836 1.836 4.336-4.336c.351-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29' />
    </g>
    <defs>
      <clipPath id='9bb03c5fd751a76531af855121781962__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckLgBoldIcon);
export default ForwardRef;
