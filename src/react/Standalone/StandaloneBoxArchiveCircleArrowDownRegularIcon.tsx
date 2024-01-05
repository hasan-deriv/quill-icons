import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBoxArchiveCircleArrowDownRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M3.5 9c0-.664.547-1.25 1.25-1.25h17.5c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25H4.75c-.703 0-1.25-.547-1.25-1.25zm1.25 0v2.5h17.5V9zm0 5H6v8.75c0 .703.547 1.25 1.25 1.25h9.492c.235.469.508.898.82 1.25H7.25a2.468 2.468 0 0 1-2.5-2.5zm5 1.875c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625m8.242 2.188c1.016-1.72 2.852-2.813 4.883-2.813a5.613 5.613 0 0 1 4.844 2.813c1.015 1.757 1.015 3.906 0 5.625-.977 1.757-2.852 2.812-4.844 2.812a5.594 5.594 0 0 1-4.883-2.812c-1.015-1.72-1.015-3.868 0-5.625m1.094.625c-.781 1.367-.781 3.046 0 4.375a4.347 4.347 0 0 0 3.789 2.187c1.563 0 3.008-.82 3.79-2.187.78-1.329.78-3.008 0-4.375-.782-1.329-2.227-2.188-3.79-2.188-1.562 0-3.008.86-3.79 2.188m1.133 2.07a.662.662 0 0 1 .898 0c.352.39.742.742 1.133 1.133v-3.516c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.516c.352-.391.742-.743 1.094-1.133a.662.662 0 0 1 .898 0 .662.662 0 0 1 0 .898c-.742.703-1.445 1.446-2.187 2.188a.662.662 0 0 1-.899 0 57.85 57.85 0 0 0-2.187-2.188.662.662 0 0 1 0-.898M21 14h1.25v.04c-.43.038-.86.116-1.25.233z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBoxArchiveCircleArrowDownRegularIcon);
export default ForwardRef;
