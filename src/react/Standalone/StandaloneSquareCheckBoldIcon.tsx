import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSquareCheckBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M9.75 9.625c-.39.026-.599.234-.625.625v12.5c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-12.5c-.026-.39-.234-.599-.625-.625H9.75Zm-2.5.625c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5Zm13.164 4.414-5 5c-.443.365-.885.365-1.328 0l-2.5-2.5c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0l1.836 1.836 4.336-4.336c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareCheckBoldIcon);
export default ForwardRef;
