import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeTradeAnytimeIcon = (
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
    <g>
      <path d='M24 8h-.82l.787-1.313c.253-.42.253-.92.013-1.34a1.32 1.32 0 0 0-1.16-.674H22c-.367 0-.667.3-.667.667s.3.667.667.667h.82l-1.393 2.326a.66.66 0 0 0-.007.674c.12.206.34.34.58.34h2c.367 0 .667-.3.667-.667s-.3-.667-.667-.667zM27.333 4.667c-.366 0-.666.3-.666.666V6H26v-.667c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666v1.334c0 .366.3.666.666.666h1.334v1.334c0 .366.3.666.666.666s.667-.3.667-.666V5.333c0-.366-.3-.666-.667-.666' />
      <path d='M20.667 1.333c-1.1 0-2 .9-2 2V10c0 1.1.9 2 2 2h2.666v2c0 .267.16.513.414.613a.66.66 0 0 0 .726-.14L26.947 12h1.726c1.1 0 2-.9 2-2V3.333c0-1.1-.9-2-2-2zM29.333 10c0 .367-.3.667-.666.667h-2a.7.7 0 0 0-.474.193l-1.526 1.527v-1.06c0-.367-.3-.667-.667-.667h-3.333A.67.67 0 0 1 20 9.993v-6.66c0-.366.3-.666.667-.666h8c.366 0 .666.3.666.666zM19.333 15.333h-2v-.666c0-.367-.3-.667-.666-.667s-.667.3-.667.667v.666h-4v-.666c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v.666h-4v-.666c0-.367-.3-.667-.667-.667s-.667.3-.667.667v.666h-.666a3.335 3.335 0 0 0-3.334 3.334v8.666a3.335 3.335 0 0 0 3.334 3.334h14.666a3.334 3.334 0 0 0 3.334-3.334v-8.666a3.334 3.334 0 0 0-3.334-3.334m2 12c0 1.1-.9 2-2 2H4.667c-1.1 0-2-.9-2-2v-8.666c0-1.1.9-2 2-2h.666v.666c0 .367.3.667.667.667s.667-.3.667-.667v-.666h4v.666c0 .367.3.667.666.667s.667-.3.667-.667v-.666h4v.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.666h2c1.1 0 2 .9 2 2z' />
      <path d='M6 22a.667.667 0 1 0 0-1.333A.667.667 0 0 0 6 22M10 22a.667.667 0 1 0 0-1.333A.667.667 0 0 0 10 22M14 22a.667.667 0 1 0 0-1.333A.667.667 0 0 0 14 22M18 22a.667.667 0 1 0 0-1.333A.667.667 0 0 0 18 22M6 24.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M10 24.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M14 24.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M18 24.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M6 27.333A.667.667 0 1 0 6 26a.667.667 0 0 0 0 1.333M10 27.333A.667.667 0 1 0 10 26a.667.667 0 0 0 0 1.333M14 27.333A.667.667 0 1 0 14 26a.667.667 0 0 0 0 1.333M18 27.333A.667.667 0 1 0 18 26a.667.667 0 0 0 0 1.333' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeTradeAnytimeIcon);
export default ForwardRef;
