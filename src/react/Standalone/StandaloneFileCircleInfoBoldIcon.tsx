import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFileCircleInfoBoldIcon = (
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
      d='M7.25 24.625h8.633a6.561 6.561 0 0 0 1.758 1.836c-.13.026-.26.039-.391.039h-10c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h6.484c.678 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797v1.718a6.726 6.726 0 0 0-1.875.82V12.75H14.75c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V8.375H7.25c-.39.026-.599.234-.625.625v15c.026.39.234.599.625.625Zm14.375-9.375c1.016 0 1.953.247 2.813.742a5.638 5.638 0 0 1 2.07 2.07 5.68 5.68 0 0 1 .742 2.813 5.68 5.68 0 0 1-.742 2.813 5.638 5.638 0 0 1-2.07 2.07 5.539 5.539 0 0 1-2.813.742 5.539 5.539 0 0 1-2.813-.742 5.638 5.638 0 0 1-2.07-2.07A5.68 5.68 0 0 1 16 20.875c0-.99.247-1.927.742-2.813a5.638 5.638 0 0 1 2.07-2.07 5.539 5.539 0 0 1 2.813-.742Zm0 3.75c.573-.052.885-.365.938-.938-.053-.572-.365-.885-.938-.937-.573.052-.885.365-.938.938.053.572.365.885.938.937Zm-1.25 1.875c.026.39.234.599.625.625v1.875c-.39.026-.599.234-.625.625.026.39.234.599.625.625h1.25c.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625v-2.5c-.026-.39-.234-.599-.625-.625H21c-.39.026-.599.234-.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCircleInfoBoldIcon);
export default ForwardRef;
