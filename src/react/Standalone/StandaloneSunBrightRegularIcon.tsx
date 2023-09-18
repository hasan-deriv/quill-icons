import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSunBrightRegularIcon = (
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
      d='M16 6.5c.39.026.599.234.625.625v3.125c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.125c.026-.39.234-.599.625-.625Zm-10 10c.026-.39.234-.599.625-.625H9.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H6.625c-.39-.026-.599-.234-.625-.625Zm15.625 0c.026-.39.234-.599.625-.625h3.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625H22.25c-.39-.026-.599-.234-.625-.625ZM16 22.125c.39.026.599.234.625.625v3.125c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V22.75c.026-.39.234-.599.625-.625ZM8.93 9.43c.286-.235.586-.235.898 0l2.188 2.226c.234.287.234.573 0 .86-.287.26-.573.26-.86 0L8.93 10.328c-.235-.312-.235-.612 0-.898Zm0 14.14c-.235-.286-.235-.586 0-.898l2.226-2.188c.287-.234.573-.234.86 0 .26.287.26.573 0 .86L9.828 23.57c-.312.235-.612.235-.898 0Zm11.054-11.054c-.234-.287-.234-.573 0-.86l2.188-2.226c.312-.235.612-.235.898 0 .235.286.235.586 0 .898l-2.226 2.188c-.287.234-.573.234-.86 0Zm0 7.968c.287-.234.573-.234.86 0l2.226 2.188c.235.312.235.612 0 .898-.286.235-.586.235-.898 0l-2.188-2.226c-.234-.287-.234-.573 0-.86Zm-.859-3.984c-.026-1.172-.547-2.07-1.563-2.695-1.041-.573-2.083-.573-3.125 0-1.015.625-1.536 1.523-1.562 2.695.026 1.172.547 2.07 1.563 2.695 1.041.573 2.083.573 3.124 0 1.016-.625 1.537-1.523 1.563-2.695Zm-7.5 0c0-.781.195-1.51.586-2.188.39-.677.924-1.21 1.601-1.601A4.305 4.305 0 0 1 16 12.125c.781 0 1.51.195 2.188.586.677.39 1.21.924 1.601 1.601.39.678.586 1.407.586 2.188 0 .781-.195 1.51-.586 2.188a4.298 4.298 0 0 1-1.602 1.601 4.305 4.305 0 0 1-2.187.586c-.781 0-1.51-.195-2.188-.586a4.298 4.298 0 0 1-1.601-1.602 4.305 4.305 0 0 1-.586-2.187Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSunBrightRegularIcon);
export default ForwardRef;
