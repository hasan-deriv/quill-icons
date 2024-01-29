import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneKeyboardRegularIcon = (
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
    <path d='M7.25 10.25q-.547 0-.898.352Q6 10.952 6 11.5v10q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352zm-2.5 1.25q.039-1.055.742-1.758T7.25 9h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm3.438.313h.624q.587.038.626.624v.626q-.04.585-.626.624h-.624q-.587-.038-.626-.624v-.626q.04-.585.625-.624m-.626 4.374q.04-.585.625-.625h.626q.585.04.624.626v.625q-.039.585-.624.625h-.626q-.585-.04-.624-.625zm.625 3.125h.626q.585.04.624.625v.625q-.039.587-.624.625h-.626q-.585-.039-.624-.625v-.625q.039-.585.625-.625m3.126-6.875q.038-.585.624-.624h.626q.585.038.624.624v.626q-.038.585-.624.624h-.626q-.585-.038-.624-.624zm.624 3.126h.626q.585.038.624.624v.625q-.038.587-.624.625h-.626q-.585-.039-.624-.625v-.625q.038-.585.624-.625m3.126-3.126q.038-.585.624-.624h.626q.585.038.625.624v.626q-.04.585-.625.624h-.625q-.587-.038-.626-.624zm.624 3.126h.626q.585.038.625.624v.625q-.04.587-.625.625h-.625q-.587-.039-.626-.625v-.625q.04-.585.626-.625m3.126-3.126q.039-.585.625-.624h.625q.585.038.625.624v.626q-.04.585-.625.624h-.625q-.587-.038-.625-.624zm.625 3.126h.625q.585.038.625.624v.625q-.04.587-.625.625h-.625q-.587-.039-.625-.625v-.625q.039-.585.625-.625m3.125-3.126q.039-.585.625-.624h.625q.585.038.625.624v.626q-.04.585-.625.624h-.625q-.587-.038-.625-.624zm.625 3.126h.625q.585.038.625.624v.625q-.04.587-.625.625h-.625q-.587-.039-.625-.625v-.625q.039-.585.625-.625m-.625 4.374q.039-.585.625-.625h.625q.585.04.625.625v.625q-.04.587-.625.625h-.625q-.587-.039-.625-.625zm-10.938-.312h8.75q.585.039.625.625-.039.585-.625.625h-8.75q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneKeyboardRegularIcon);
export default ForwardRef;
