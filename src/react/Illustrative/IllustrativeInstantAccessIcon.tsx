import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeInstantAccessIcon = (
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
      <path d='M26 5.333H6a3.335 3.335 0 0 0-3.333 3.334V20A3.335 3.335 0 0 0 6 23.333h9.333v2h-2.666c-.367 0-.667.3-.667.667 0 .367.3.667.667.667h6.666c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-2.666v-2H26A3.334 3.334 0 0 0 29.333 20V8.667A3.335 3.335 0 0 0 26 5.333M28 20c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8.667c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2z' />
      <path d='M26 16.667c0-.367-.3-.667-.667-.667h-2c-.08 0-.16.02-.233.047-.02.006-.04.02-.067.033a.64.64 0 0 0-.14.093c-.02.014-.033.027-.053.047a.798.798 0 0 0-.12.173s-.007.014-.013.02a.691.691 0 0 0-.047.234v2.026c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.393l.86.86c.134.133.3.193.474.193A.664.664 0 0 0 25.8 18.2l-.86-.86h.393c.367 0 .667-.3.667-.667zM22.667 13.333V14c0 .367.3.667.666.667.367 0 .667-.3.667-.667v-.667c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666M21.14 13.527a.664.664 0 1 0-.94.94l.667.666c.133.134.3.194.473.194s.34-.067.473-.194c.26-.26.26-.68 0-.94l-.666-.666zM20.667 16H20c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h.667c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667M20.94 11.333l1.727-1.726.86.86a.664.664 0 1 0 .94-.94l-.86-.86a1.336 1.336 0 0 0-1.887 0l-1.727 1.726L19.6 10a1.336 1.336 0 0 0-1.887 0L9.32 18.393l-1.527-1.526a.664.664 0 1 0-.94.94l1.527 1.526a1.322 1.322 0 0 0 1.88 0l8.393-8.393.394.393a1.36 1.36 0 0 0 1.886 0z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeInstantAccessIcon);
export default ForwardRef;
