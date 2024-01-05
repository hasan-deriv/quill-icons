import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeRegisterIcon = (
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
      <path d='M22.667 2.667H9.333A3.335 3.335 0 0 0 6 6v20a3.335 3.335 0 0 0 3.333 3.333h13.334A3.335 3.335 0 0 0 26 26V6a3.335 3.335 0 0 0-3.333-3.333m2 23.333c0 1.1-.9 2-2 2H9.333c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h13.334c1.1 0 2 .9 2 2z' />
      <path d='M17.333 7.333H22c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667h-4.667c-.366 0-.666.3-.666.667 0 .366.3.666.666.666M22.667 8.667h-5.334c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h5.334c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666M17.333 12.667h4c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-4c-.366 0-.666.3-.666.667 0 .367.3.667.666.667M17.333 15.333H22c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667h-4.667c-.366 0-.666.3-.666.667 0 .366.3.666.666.666M12 9.78c1.227 0 2.22-1 2.22-2.22 0-1.22-1-2.22-2.22-2.22-1.22 0-2.22 1-2.22 2.22 0 1.22 1 2.22 2.22 2.22m0-3.113a.886.886 0 1 1 0 1.772.886.886 0 0 1 0-1.772M10.22 15.78h3.553c.86 0 1.554-.7 1.554-1.553v-1.334c0-1.1-.9-2-2-2-.367 0-.667.3-.667.667 0 .367.3.667.667.667.366 0 .666.3.666.666v1.334c0 .12-.1.22-.22.22H10.22c-.12 0-.22-.1-.22-.22v-1.334c0-.366.3-.666.667-.666.366 0 .666-.3.666-.667 0-.367-.3-.667-.666-.667-1.1 0-2 .9-2 2v1.334c0 .86.7 1.553 1.553 1.553M23.333 24c0-.367-.3-.667-.666-.667h-2c-.08 0-.16.02-.234.047-.02.007-.04.02-.066.033a.635.635 0 0 0-.14.094c-.02.013-.034.026-.054.046a.805.805 0 0 0-.12.174s-.006.013-.013.02a.694.694 0 0 0-.047.233v2.027c0 .366.3.666.667.666.367 0 .667-.3.667-.666v-.394l.86.86c.133.134.3.194.473.194s.34-.067.473-.194c.26-.26.26-.68 0-.94l-.86-.86h.394c.366 0 .666-.3.666-.666zM20 20.667v.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.666c0-.367-.3-.667-.666-.667-.367 0-.667.3-.667.667M18.473 20.86a.664.664 0 1 0-.94.94l.667.667c.133.133.3.193.473.193a.664.664 0 0 0 .473-1.133l-.666-.667zM18 23.333h-.667c-.366 0-.666.3-.666.667 0 .367.3.667.666.667H18c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667' />
      <path d='M15.333 25.333h-4.666a.669.669 0 0 1-.667-.666v-5.334c0-.366.3-.666.667-.666h10.666c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667H10.667c-1.1 0-2 .9-2 2v5.334c0 1.1.9 2 2 2h4.666c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeRegisterIcon);
export default ForwardRef;
