import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingLgBoldIcon = (
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
      <path d='M18.125 15.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 10 7.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.054 1.836 2.969 2.968A8.06 8.06 0 0 0 10 23.625a8.06 8.06 0 0 0 4.063-1.094q1.913-1.132 2.968-2.968 1.095-1.837 1.094-4.063M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m10.234-3.75q-.507 0-.859.352-.351.35-.352.859v1.289h1.602q.585.039.625.625-.039.585-.625.625H9.063v.39q0 1.095-.391 2.11h4.14q.86.078.938.938-.079.858-.937.937H7.187a.87.87 0 0 1-.78-.43q-.274-.469-.04-.937l.352-.742a3.85 3.85 0 0 0 .468-1.875V15.5h-.312q-.585-.039-.625-.625.039-.585.625-.625h.313l-.04-1.29q.04-1.328.899-2.187.86-.858 2.187-.898.587 0 1.133.234l1.172.47q.78.39.508 1.21-.39.742-1.211.508l-1.172-.469a1.4 1.4 0 0 0-.43-.078' />
    </g>
    <defs>
      <clipPath id='cfae3a032d07d59b0c63abb03ce24bae__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingLgBoldIcon);
export default ForwardRef;
