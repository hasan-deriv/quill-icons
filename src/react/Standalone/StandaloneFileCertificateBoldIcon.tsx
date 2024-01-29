import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileCertificateBoldIcon = (
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
    <path d='M23.5 24.625q.585-.039.625-.625V12.75H21q-.547 0-.898-.352-.352-.35-.352-.898V8.375H13.5q-.585.039-.625.625v2.656a2.13 2.13 0 0 0-1.602 0l-.234.078q0 .04-.039.04V9q.039-1.055.742-1.758T13.5 6.5h6.484q1.015 0 1.758.742l3.516 3.516Q26 11.5 26 12.555V24q-.039 1.055-.742 1.758-.704.703-1.758.742h-8.867a1.8 1.8 0 0 0 .117-.625v-1.25zM10.258 12.828l.625.235a.36.36 0 0 0 .234 0l.625-.235q.664-.234 1.094.274l.43.546a.5.5 0 0 0 .195.118l.664.078q.664.117.781.781l.117.664q0 .117.118.234l.507.391q.508.469.313 1.094l-.274.625a.36.36 0 0 0 0 .234l.235.625q.234.625-.274 1.094l-.546.39a.5.5 0 0 0-.118.235l-.078.664q-.117.664-.781.781l-.625.078v4.141a.61.61 0 0 1-.312.547.67.67 0 0 1-.665-.04L11 25.368l-1.523 1.016a.6.6 0 0 1-.625.039q-.352-.195-.352-.547v-4.14l-.625-.079q-.664-.117-.781-.781l-.078-.664a.5.5 0 0 0-.118-.234l-.546-.391q-.508-.469-.274-1.094l.234-.625a.36.36 0 0 0 0-.234l-.234-.625q-.234-.625.274-1.094l.546-.39a.5.5 0 0 0 .118-.235l.078-.664q.117-.664.82-.781l.625-.078a.5.5 0 0 0 .234-.118l.391-.546q.469-.508 1.094-.274M8.5 17.75q.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCertificateBoldIcon);
export default ForwardRef;
