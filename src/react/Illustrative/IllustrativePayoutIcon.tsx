import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativePayoutIcon = (
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
    <g>
      <path d='m28.402 6.117-3.06-3.06a1.336 1.336 0 0 0-1.887 0l-3.06 3.06a1.32 1.32 0 0 0-.38.94H13.73a5.34 5.34 0 0 0-5.334 5.333v2.667c-2.206 0-4 1.793-4 4v4h-.393a1.334 1.334 0 0 0-.947 2.273l3.06 3.06c.26.26.6.387.94.387s.68-.134.94-.387l3.06-3.06a1.32 1.32 0 0 0 .38-.94h6.287a5.34 5.34 0 0 0 5.333-5.333V16.39h.667a3.335 3.335 0 0 0 3.333-3.333V8.39h.394a1.334 1.334 0 0 0 .947-2.273zM7.069 27.45l-3.06-3.06h1.06c.366 0 .666-.3.666-.667v-4.666a2.666 2.666 0 0 1 2.667-2.667v7.333c0 .367.3.667.667.667h1.06zm14.666-8.393c0 2.206-1.793 4-4 4h-8V12.39c0-2.207 1.794-4 4-4h8zm4.667-12c-.367 0-.667.3-.667.666v5.334c0 1.1-.9 2-2 2h-.666V7.723c0-.366-.3-.666-.667-.666h-1.06l3.06-3.06 3.06 3.06z' />
      <path d='M17.735 13.723c.367 0 .667-.3.667-.666s-.3-.667-.667-.667h-1.333v-.667c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666v.667h-.667c-.733 0-1.333.6-1.333 1.333v1.334c0 .733.6 1.333 1.333 1.333h2.667v1.333h-3.334c-.366 0-.666.3-.666.667s.3.667.666.667h1.334v.666c0 .367.3.667.666.667s.667-.3.667-.667v-.666h.667c.733 0 1.333-.6 1.333-1.334V16.39c0-.733-.6-1.333-1.333-1.333h-2.667v-1.334z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativePayoutIcon);
export default ForwardRef;
