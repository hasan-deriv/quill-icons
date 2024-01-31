import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileDocBoldIcon = (
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
    <path d='M8.5 24.625h1.25V26.5H8.5q-1.055-.039-1.758-.742Q6.04 25.054 6 24V9q.039-1.055.742-1.758T8.5 6.5h6.484q1.016 0 1.758.742l3.516 3.516Q21 11.5 21 12.555v5.195h-1.875v-5H16q-.547 0-.898-.352-.352-.35-.352-.898V8.375H8.5q-.586.039-.625.625v15q.039.585.625.625m4.375-4.375h1.25q.78.039 1.328.547.508.546.547 1.328v2.5q-.039.78-.547 1.328-.546.508-1.328.547h-1.25q-.585-.039-.625-.625v-5q.039-.585.625-.625m.625 5h.625q.585-.039.625-.625v-2.5q-.039-.585-.625-.625H13.5zm10.313-5h.625q.663 0 1.093.469.47.429.469 1.093v.313q-.039.585-.625.625-.585-.039-.625-.625v-.312q-.039-.274-.312-.313h-.625q-.274.039-.313.313v3.125q.039.273.313.312h.625q.273-.039.312-.312v-.313q.039-.585.625-.625.585.039.625.625v.313q0 .663-.469 1.093a1.42 1.42 0 0 1-1.093.469h-.625q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-3.125q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469m-6.563 1.563q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469h.625q.665 0 1.094.469.47.429.469 1.093v3.125q0 .665-.469 1.094a1.42 1.42 0 0 1-1.093.469h-.625q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093zm1.563-.313q-.274.039-.313.313v3.125q.039.273.313.312h.625q.273-.039.312-.312v-3.125q-.039-.274-.312-.313z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileDocBoldIcon);
export default ForwardRef;
