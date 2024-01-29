import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCalendarRangeRegularIcon = (
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
    <path d='M11.625 6.5q.585.039.625.625V9h7.5V7.125q.039-.585.625-.625.585.039.625.625V9h1.25q1.055.039 1.758.742t.742 1.758V24q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24V11.5q.039-1.055.742-1.758T9.75 9H11V7.125q.039-.585.625-.625M23.5 14h-15v10q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898zm-1.25-3.75H9.75q-.547 0-.898.352-.352.35-.352.898v1.25h15V11.5q0-.547-.352-.898-.35-.352-.898-.352m0 6.875q-.039.585-.625.625h-6.25q-.585-.039-.625-.625.039-.585.625-.625h6.25q.585.039.625.625m-5.625 5.625h-6.25q-.585-.039-.625-.625.039-.585.625-.625h6.25q.585.039.625.625-.039.585-.625.625M11 17.125q.039.585.625.625.585-.039.625-.625-.039-.585-.625-.625-.585.039-.625.625M11.625 19q-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938 1.055.038 1.64.938.47.938 0 1.875-.585.898-1.64.937m8.75 3.75q.585-.039.625-.625-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625m1.875-.625q-.039 1.055-.937 1.64-.937.47-1.875 0-.9-.585-.938-1.64.039-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarRangeRegularIcon);
export default ForwardRef;
