import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleEuroBoldIcon = (
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
    <path d='M24.125 16.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 16 8.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.055 1.836 2.969 2.968A8.06 8.06 0 0 0 16 24.625a8.06 8.06 0 0 0 4.063-1.094q1.914-1.132 2.968-2.968 1.094-1.837 1.094-4.063M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m5 .625h.625a5 5 0 0 1-.04-.586q0-.352.04-.664H11q-.585-.039-.625-.625.039-.585.625-.625h.977q.586-1.406 1.796-2.266 1.25-.82 2.852-.859h1.602q.859.078.937.938-.078.858-.937.937h-1.602q-1.602.04-2.5 1.25h3.125q.585.039.625.625-.039.585-.625.625h-3.71a2.7 2.7 0 0 0-.08.664q0 .312.08.586h3.71q.585.039.625.625-.039.585-.625.625h-3.203q.937 1.25 2.578 1.328h1.602q.859.078.937.938-.078.82-.937.937h-1.602q-1.64-.039-2.852-.898a5.3 5.3 0 0 1-1.835-2.305H11q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEuroBoldIcon);
export default ForwardRef;
