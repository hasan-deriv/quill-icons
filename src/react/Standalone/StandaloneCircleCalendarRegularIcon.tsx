import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleCalendarRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m8.125-6.25q.585.039.625.625v.625h2.5v-.625q.039-.585.625-.625.585.039.625.625v.625h.625q.78.039 1.328.547.508.546.547 1.328v6.25q-.039.78-.547 1.328-.546.508-1.328.547h-6.25a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 11 19.625v-6.25q.039-.78.547-1.328.546-.508 1.328-.547h.625v-.625q.039-.585.625-.625m-1.875 3.125V14h7.5v-.625q-.039-.585-.625-.625h-6.25q-.585.039-.625.625m7.5 1.875h-7.5v4.375q.039.585.625.625h6.25q.585-.039.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleCalendarRegularIcon);
export default ForwardRef;
