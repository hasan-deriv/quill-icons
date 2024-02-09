import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 23.625h1.25V25.5H2.5q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555v5.195h-1.875v-5H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625v15q.039.585.625.625m5.313-4.375h.625q.663 0 1.093.469.47.429.469 1.093v.313q-.039.585-.625.625-.585-.039-.625-.625v-.312q-.039-.274-.312-.313h-.626q-.273.039-.312.313v3.125q.039.273.313.312h.625q.273-.039.312-.312v-.313q.039-.585.625-.625.585.039.625.625v.313q0 .663-.469 1.093a1.42 1.42 0 0 1-1.094.469h-.624q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-3.125q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469m5.195 0h1.367q.585.039.625.625-.039.585-.625.625h-1.367q-.47.039-.508.508 0 .312.313.469l1.445.664q1.016.468 1.055 1.601a1.7 1.7 0 0 1-.508 1.25 1.7 1.7 0 0 1-1.25.508h-1.68q-.585-.039-.625-.625.039-.585.625-.625h1.68q.468-.039.508-.508 0-.312-.313-.469l-1.445-.664q-1.016-.468-1.055-1.601 0-.743.508-1.25a1.7 1.7 0 0 1 1.25-.508m3.867 0q.585.039.625.625v1.25q0 1.367.625 2.578a5.54 5.54 0 0 0 .625-2.578v-1.25q.039-.585.625-.625.585.039.625.625v1.25q0 2.07-1.172 3.79l-.195.312a.6.6 0 0 1-.508.273.6.6 0 0 1-.508-.273l-.195-.313a6.6 6.6 0 0 1-1.172-3.789v-1.25q.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='f49f6a9ab51004a65b233a3f41ba4f5a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvLgBoldIcon);
export default ForwardRef;
