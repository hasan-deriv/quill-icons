import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneGripDotsVerticalRegularIcon = (
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
      d='M13.5 10.25c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625Zm-2.5 0c.026-.703.338-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64-.026.703-.338 1.25-.938 1.64-.624.313-1.25.313-1.874 0-.6-.39-.912-.937-.938-1.64Zm2.5 6.25c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625Zm-2.5 0c.026-.703.338-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64-.026.703-.338 1.25-.938 1.64-.624.313-1.25.313-1.874 0-.6-.39-.912-.937-.938-1.64Zm1.875 6.875c.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625Zm0-2.5c.703.026 1.25.338 1.64.938.313.625.313 1.25 0 1.875-.39.599-.937.911-1.64.937-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.599.937-.911 1.64-.937ZM19.75 10.25c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625Zm-2.5 0c.026-.703.338-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .599.39.911.937.937 1.64-.026.703-.338 1.25-.938 1.64-.625.313-1.25.313-1.875 0-.599-.39-.911-.937-.937-1.64Zm1.875 6.875c.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625Zm0-2.5c.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.598.937-.911 1.64-.937Zm.625 8.125c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625Zm-2.5 0c.026-.703.338-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .599.39.911.937.937 1.64-.026.703-.338 1.25-.938 1.64-.625.313-1.25.313-1.875 0-.599-.39-.911-.937-.937-1.64Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGripDotsVerticalRegularIcon);
export default ForwardRef;
