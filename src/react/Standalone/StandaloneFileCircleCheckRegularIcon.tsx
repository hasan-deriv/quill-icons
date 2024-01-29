import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileCircleCheckRegularIcon = (
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
    <path d='M21 25.25q.547 0 .898-.352.352-.35.352-.898V14h-4.375a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 16 12.125V7.75h-5q-.547 0-.898.352-.352.35-.352.898v15q0 .547.352.898.35.352.898.352zm-3.125-12.5h4.375a1 1 0 0 0-.195-.273l-4.532-4.532a.6.6 0 0 0-.273-.156v4.336q.039.585.625.625M11 6.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328V24q-.039 1.055-.742 1.758-.704.703-1.758.742H11q-1.055-.039-1.758-.742Q8.54 25.054 8.5 24V9q.039-1.055.742-1.758T11 6.5m8.555 11.484-4.14 4.18q-.47.351-.9 0l-2.07-2.11q-.39-.429 0-.859.43-.351.86 0l1.64 1.64 3.75-3.75q.43-.35.86 0 .39.47 0 .9' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCircleCheckRegularIcon);
export default ForwardRef;
