import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneKeyboardBoldIcon = (
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
    <path d='M7.25 10.875q-.585.039-.625.625v10q.039.585.625.625h17.5q.585-.039.625-.625v-10q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T7.25 9h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm6.875 7.5h8.75q.585.039.625.625v.625q-.039.585-.625.625h-8.75q-.585-.039-.625-.625v-.625q.039-.585.625-.625m-2.812-2.812q.039-.587.624-.625h.626q.585.038.624.624v.625q-.038.587-.624.625h-.626q-.585-.039-.624-.625zm.624-3.75h.626q.585.038.624.624v.626q-.038.585-.624.624h-.626q-.585-.038-.624-.624v-.626q.039-.585.624-.624m2.5 3.75q.04-.587.626-.625h.624q.587.038.626.624v.625q-.04.587-.626.625h-.624q-.587-.039-.626-.625zm.626-3.75h.624q.587.038.626.624v.626q-.04.585-.626.624h-.624q-.587-.038-.626-.624v-.626q.04-.585.626-.624m2.5 3.75q.038-.587.624-.625h.626q.585.038.625.624v.625q-.04.587-.625.625h-.625q-.587-.039-.626-.625zm.624-3.75h.626q.585.038.625.624v.626q-.04.585-.625.624h-.625q-.587-.038-.626-.624v-.626q.04-.585.626-.624m2.5 3.75q.04-.587.625-.625h.625q.587.038.625.624v.625q-.039.587-.625.625h-.625q-.585-.039-.625-.625zm.625-3.75h.625q.587.038.625.624v.626q-.039.585-.625.624h-.625q-.585-.038-.625-.624v-.626q.04-.585.625-.624m2.5 3.75q.04-.587.625-.625h.625q.587.038.625.624v.625q-.039.587-.625.625h-.625q-.585-.039-.625-.625zm.625-3.75h.625q.587.038.625.624v.626q-.039.585-.625.624h-.625q-.585-.038-.625-.624v-.626q.04-.585.625-.624' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneKeyboardBoldIcon);
export default ForwardRef;
