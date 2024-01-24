import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeExtendedTimeIcon = (
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
      <path d='M4 16c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2 .367 0 .667-.3.667-.667s-.3-.667-.667-.667a.67.67 0 0 1-.667-.666v-4c0-.367.3-.667.667-.667M22.553 13.74c-.366 0-.666.3-.666.667 0 .366.3.666.666.666s.667.3.667.667v4c0 .367-.3.667-.667.667-.366 0-.666.3-.666.666s.3.667.666.667c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M16.94 6.667H9.607c-1.1 0-2 .9-2 2v5.886a3.34 3.34 0 0 0 1.326 2.66l1.9 1.434-1.82 1.293a3.34 3.34 0 0 0-1.406 2.72v6.007c0 1.1.9 2 2 2h7.333c1.1 0 2-.9 2-2v-5.994c0-1.073-.52-2.086-1.393-2.713l-1.834-1.313 1.9-1.434a3.36 3.36 0 0 0 1.327-2.66V8.667c0-1.1-.9-2-2-2M9.86 29.333l2.94-3.013a.67.67 0 0 1 .953 0l2.94 3.013zm7.753-14.78c0 .627-.3 1.22-.793 1.594l-1.9 1.433c-.34.26-.533.653-.527 1.08 0 .427.207.82.56 1.067l1.834 1.313c.52.373.833.98.833 1.627v5.686l-2.9-2.973a1.997 1.997 0 0 0-2.867 0l-2.9 2.973v-5.7c0-.646.314-1.253.84-1.633l1.82-1.293a1.34 1.34 0 0 0 .56-1.067c0-.427-.193-.827-.526-1.08l-1.9-1.433a2 2 0 0 1-.794-1.594V8.667c0-.367.3-.667.667-.667h7.333c.367 0 .667.3.667.667v5.886zM25.667 2a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666m0 7.333c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.347 3 3-1.347 3-3 3' />
      <path d='M26.667 5.667h-.334v-.334c0-.366-.3-.666-.666-.666s-.667.3-.667.666v.334h-.333c-.367 0-.667.3-.667.666s.3.667.667.667H25v.333c0 .367.3.667.667.667.366 0 .666-.3.666-.667V7h.334c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeExtendedTimeIcon);
export default ForwardRef;
