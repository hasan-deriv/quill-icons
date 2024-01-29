import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneComputerRegularIcon = (
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
    <path d='M18.5 9H6q-.547 0-.898.352-.352.35-.352.898V19q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898v-8.75q0-.547-.352-.898Q19.048 9 18.5 9M6 21.5q-1.055-.039-1.758-.742Q3.54 20.054 3.5 19v-8.75q.039-1.055.742-1.758Q4.946 7.79 6 7.75h12.5q1.055.039 1.758.742T21 10.25V19q-.039 1.055-.742 1.758-.704.703-1.758.742h-3.828l.86 2.5h2.343q.585.039.625.625-.039.585-.625.625H6.625q-.585-.039-.625-.625.039-.585.625-.625h2.383l.82-2.5zm4.297 2.5h3.906l-.86-2.5h-2.187zM24.125 9q-.585.039-.625.625V11.5h3.75V9.625q-.039-.585-.625-.625zm-.625 3.75V14h3.75v-1.25zm0 10.625q.039.585.625.625h2.5q.585-.039.625-.625V15.25H23.5zm-1.25-13.75q.039-.781.547-1.328.546-.508 1.328-.547h2.5q.78.039 1.328.547.508.546.547 1.328v13.75q-.039.78-.547 1.328-.546.508-1.328.547h-2.5a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm3.125 10.938q-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937-.079.859-.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneComputerRegularIcon);
export default ForwardRef;
