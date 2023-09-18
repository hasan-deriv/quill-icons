import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpFromSquareRegularIcon = (
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
      d='m16.43 6.695 4.062 4.063c.26.286.26.573 0 .86-.286.26-.573.26-.86 0l-3.007-2.97V19c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.648l-3.008 2.97c-.286.26-.573.26-.86 0-.26-.287-.26-.574 0-.86l4.063-4.063c.287-.26.573-.26.86 0ZM8.5 7.75h1.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H8.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898V24c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V10.25c0-.365-.117-.664-.352-.898C24.164 9.117 23.865 9 23.5 9h-1.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h1.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C6.273 25.289 6.026 24.703 6 24V10.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpFromSquareRegularIcon);
export default ForwardRef;
