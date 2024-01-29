import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneRectangleAdRegularIcon = (
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
    <path d='M7.25 9q-.547 0-.898.352Q6 9.702 6 10.25v12.5q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898v-12.5q0-.547-.352-.898Q25.298 9 24.75 9zm-2.5 1.25q.039-1.055.742-1.758T7.25 7.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm8.398 2.852 2.813 6.25q.156.546-.313.859-.546.156-.859-.313L14.4 19h-3.672l-.391.898q-.312.47-.86.313-.507-.312-.312-.86l2.813-6.25a.63.63 0 0 1 .585-.351q.39 0 .586.352m-.585 1.796-1.29 2.852h2.579zm6.874.977q-.898.04-1.367.781a1.66 1.66 0 0 0 0 1.563q.469.742 1.367.781.9-.04 1.368-.781a1.66 1.66 0 0 0 0-1.563q-.469-.742-1.367-.781M21 15.094v-1.719q.039-.585.625-.625.585.039.625.625v6.25q-.039.585-.625.625-.468-.039-.625-.469-.664.47-1.562.469-1.212-.04-1.993-.82-.78-.781-.82-1.992.04-1.212.82-1.993.781-.78 1.992-.82.9 0 1.563.469' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRectangleAdRegularIcon);
export default ForwardRef;
