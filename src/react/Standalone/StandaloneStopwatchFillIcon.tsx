import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneStopwatchFillIcon = (
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
    <path d='M14.125 6.5h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.625v1.367c1.445.235 2.773.82 3.867 1.719l.86-.82a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-.937.938c.82 1.289 1.328 2.812 1.328 4.414 0 4.492-3.672 8.125-8.125 8.125a8.12 8.12 0 0 1-8.125-8.125 8.08 8.08 0 0 1 6.875-8.008V9h-.625c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25m2.813 7.5a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937v5c0 .547.39.938.937.938.508 0 .938-.391.938-.938z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStopwatchFillIcon);
export default ForwardRef;
