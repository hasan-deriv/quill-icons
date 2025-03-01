import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeProtectedAndSecureIcon = (
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
    <g fillOpacity={0.72}>
      <path
        fillRule='evenodd'
        d='M26.667 2c-1.102 0-2 .898-2 2v.78a2 2 0 0 0-1.334 1.887v2a2 2 0 0 0 2 2h3.334a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.334-1.887V4c0-1.102-.898-2-2-2h-.666ZM28 4.667V4a.67.67 0 0 0-.667-.667h-.666A.67.67 0 0 0 26 4v.667h2ZM25.333 6a.667.667 0 0 0-.666.667v2c0 .368.298.666.666.666h3.334a.667.667 0 0 0 .666-.666v-2A.667.667 0 0 0 28.667 6h-3.334Z'
        clipRule='evenodd'
      />
      <path d='M7.333 6.667a2 2 0 0 0-2 2v2a.667.667 0 1 1-1.333 0v-2a3.333 3.333 0 0 1 3.333-3.334h13.334a.667.667 0 1 1 0 1.334H7.333ZM30.667 13.333a.667.667 0 0 0-1.334 0V20a2 2 0 0 1-2 2H14a.667.667 0 0 0 0 1.333h2.667v2H14a.667.667 0 0 0 0 1.334h6.667a.667.667 0 0 0 0-1.334H18v-2h9.333A3.333 3.333 0 0 0 30.667 20v-6.667ZM4.667 25.866a.667.667 0 0 0 0 1.334h4a.667.667 0 0 0 0-1.334h-4Z' />
      <path
        fillRule='evenodd'
        d='M4 12.667h5.333A2.666 2.666 0 0 1 12 15.333v12A2.666 2.666 0 0 1 9.333 30H4a2.666 2.666 0 0 1-2.667-2.667v-12A2.666 2.666 0 0 1 4 12.667Zm6.667 2.666c0-.733-.6-1.333-1.334-1.333H4c-.733 0-1.333.6-1.333 1.333v12c0 .734.6 1.334 1.333 1.334h5.333c.734 0 1.334-.6 1.334-1.334v-12Z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeProtectedAndSecureIcon);
export default ForwardRef;
