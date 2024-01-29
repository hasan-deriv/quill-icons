import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneRectangleBarcodeRegularIcon = (
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
    <path d='M7.25 9q-.547 0-.898.352Q6 9.702 6 10.25v12.5q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898v-12.5q0-.547-.352-.898Q25.298 9 24.75 9zm-2.5 1.25q.039-1.055.742-1.758T7.25 7.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm3.75 1.875q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625zm11.25 0q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625zm3.125-.625q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-8.75q.039-.585.625-.625M11 12.125q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625zm3.125-.625q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-8.75q.039-.585.625-.625m2.5.625q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRectangleBarcodeRegularIcon);
export default ForwardRef;
