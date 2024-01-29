import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMemoCircleCheckRegularIcon = (
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
    <path d='M17.25 7.75h-10q-.547 0-.898.352Q6 8.452 6 9v15q0 .547.352.898.35.352.898.352h9.063q.585.703 1.328 1.21-.195.04-.391.04h-10q-1.055-.039-1.758-.742Q4.79 25.054 4.75 24V9q.039-1.055.742-1.758T7.25 6.5h10q1.055.039 1.758.742.703.704.742 1.758v5.273q-.665.156-1.25.47V9q0-.547-.352-.898-.35-.352-.898-.352m-10 4.375q.039-.585.625-.625h8.75q.585.039.625.625-.039.585-.625.625h-8.75q-.585-.039-.625-.625m.625 3.125h7.5q.585.039.625.625-.039.585-.625.625h-7.5q-.585-.039-.625-.625.039-.585.625-.625m0 3.75h5q.585.039.625.625-.039.585-.625.625h-5q-.585-.039-.625-.625.039-.585.625-.625m13.75 6.25q1.171 0 2.188-.586a4.3 4.3 0 0 0 1.601-1.602Q26 22.048 26 20.876q0-1.172-.586-2.187a4.3 4.3 0 0 0-1.602-1.602 4.3 4.3 0 0 0-2.187-.586q-1.172 0-2.187.586-1.016.585-1.602 1.602a4.3 4.3 0 0 0-.586 2.187q0 1.171.586 2.188.585 1.015 1.602 1.601 1.015.585 2.187.586m0-10q1.523 0 2.813.742a5.64 5.64 0 0 1 2.07 2.07 5.7 5.7 0 0 1 .742 2.813 5.7 5.7 0 0 1-.742 2.813 5.64 5.64 0 0 1-2.07 2.07 5.54 5.54 0 0 1-2.813.742 5.54 5.54 0 0 1-2.812-.742 5.64 5.64 0 0 1-2.07-2.07A5.7 5.7 0 0 1 16 20.875q0-1.485.742-2.812a5.64 5.64 0 0 1 2.07-2.07 5.54 5.54 0 0 1 2.813-.743m1.758 3.945q.43-.39.86 0 .39.43 0 .86l-2.813 2.812q-.43.39-.86 0l-1.562-1.562q-.39-.43 0-.86.43-.39.86 0L21 21.54z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMemoCircleCheckRegularIcon);
export default ForwardRef;
