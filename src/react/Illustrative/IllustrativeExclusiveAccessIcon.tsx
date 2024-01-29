import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeExclusiveAccessIcon = (
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
      <path d='M28.667 6.787v-2.12c0-1.1-.9-2-2-2h-1.334c-1.1 0-2 .9-2 2 0 .366.3.666.667.666s.667-.3.667-.666.3-.667.666-.667h1.334c.366 0 .666.3.666.667v2H24c-1.1 0-2 .9-2 2v2.666c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V8.667c0-.867-.56-1.6-1.333-1.88m0 4.546c0 .367-.3.667-.667.667h-4a.67.67 0 0 1-.667-.667V8.667c0-.367.3-.667.667-.667h4c.367 0 .667.3.667.667zM19.667 13.333V14.7c-.947.16-1.667.98-1.667 1.967v4.666c0 .987.72 1.807 1.667 1.967v1.367c0 .366.3.666.666.666s.667-.3.667-.666V23.3a2 2 0 0 0 1.667-1.967v-4.666c0-.987-.72-1.807-1.667-1.967v-1.367c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666m1.666 3.334v4.666c0 .367-.3.667-.666.667H20a.67.67 0 0 1-.667-.667v-4.666c0-.367.3-.667.667-.667h.667c.366 0 .666.3.666.667M14.333 26.667c.367 0 .667-.3.667-.667v-2.7a2 2 0 0 0 1.667-1.967V14c0-.987-.72-1.807-1.667-1.967v-1.366c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v1.366C12.72 12.193 12 13.013 12 14v7.333c0 .987.72 1.807 1.667 1.967V26c0 .367.3.667.666.667m-1-5.334V14c0-.367.3-.667.667-.667h.667c.366 0 .666.3.666.667v7.333c0 .367-.3.667-.666.667H14a.67.67 0 0 1-.667-.667M8.333 24.667c.367 0 .667-.3.667-.667v-.7a2 2 0 0 0 1.667-1.967v-4c0-.986-.72-1.806-1.667-1.966v-2.034c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666v2.034c-.947.16-1.667.98-1.667 1.966v4c0 .987.72 1.807 1.667 1.967v.7c0 .367.3.667.666.667m-1-3.334v-4c0-.366.3-.666.667-.666h.667c.366 0 .666.3.666.666v4c0 .367-.3.667-.666.667H8a.67.67 0 0 1-.667-.667' />
      <path d='M26 14.667c-.367 0-.667.3-.667.666v9.334A3.334 3.334 0 0 1 22 28H6.667a3.335 3.335 0 0 1-3.334-3.333V11.333A3.335 3.335 0 0 1 6.667 8H20c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666H6.667A4.67 4.67 0 0 0 2 11.333v13.334a4.67 4.67 0 0 0 4.667 4.666H22a4.67 4.67 0 0 0 4.667-4.666v-9.334c0-.366-.3-.666-.667-.666' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeExclusiveAccessIcon);
export default ForwardRef;
