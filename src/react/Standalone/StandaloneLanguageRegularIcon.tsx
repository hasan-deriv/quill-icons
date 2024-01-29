import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLanguageRegularIcon = (
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
    <path d='M15.375 10.25H6q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352h9.375zm1.25 0v12.5H26q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352zM28.5 11.5v10q-.039 1.055-.742 1.758-.704.703-1.758.742H6q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-10q.039-1.055.742-1.758Q4.946 9.04 6 9h20q1.055.039 1.758.742T28.5 11.5m-18.164 1.64 2.5 6.25q.156.548-.352.82-.547.157-.82-.35l-.351-.86H8.187l-.351.86q-.274.507-.82.35-.508-.272-.352-.82l2.5-6.25q.196-.39.586-.39t.586.39m-.586 1.915L8.656 17.75h2.188zm13.125-1.68V14h2.5q.585.039.625.625-.039.585-.625.625h-.195l-.157.469a7.9 7.9 0 0 1-1.718 2.695l.39.234.742.43q.47.352.235.86-.352.468-.86.234l-.742-.469a4.4 4.4 0 0 1-.742-.469 6.6 6.6 0 0 1-1.015.625l-.665.313q-.547.195-.82-.274-.234-.547.274-.82l.664-.351q.312-.157.625-.352l-.82-.82q-.353-.43 0-.86.429-.39.859 0l.898.86.04.039a6.5 6.5 0 0 0 1.484-2.305v-.039h-4.727q-.585-.039-.625-.625.039-.585.625-.625h2.5v-.625q.039-.585.625-.625.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLanguageRegularIcon);
export default ForwardRef;
