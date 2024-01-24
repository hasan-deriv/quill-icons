import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeStraightforwardTradingIcon = (
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
      <path d='M16.667 24v-2c0-.987-.72-1.807-1.667-1.967v-.7c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666v.7C12.72 20.193 12 21.013 12 22v2c0 .993.727 1.807 1.673 1.967 0 .013-.006.02-.006.033v.667c0 .366.3.666.666.666s.667-.3.667-.666V26s0-.02-.007-.033A2 2 0 0 0 16.667 24m-1.334 0c0 .367-.3.667-.666.667H14a.67.67 0 0 1-.667-.667v-2c0-.367.3-.667.667-.667h.667c.366 0 .666.3.666.667zM20.333 26c.367 0 .667-.3.667-.667v-.7a2 2 0 0 0 1.667-1.966v-1.334c0-.986-.72-1.806-1.667-1.966v-.7c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v.7c-.947.16-1.667.98-1.667 1.966v1.334c0 .986.72 1.806 1.667 1.966v.7c0 .367.3.667.666.667m-1-3.333v-1.334c0-.366.3-.666.667-.666h.667c.366 0 .666.3.666.666v1.334c0 .366-.3.666-.666.666H20a.67.67 0 0 1-.667-.666M8.333 25.333c.367 0 .667-.3.667-.666v-.7A2 2 0 0 0 10.667 22v-6.667c0-.986-.72-1.806-1.667-1.966v-2.034c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666v2.034c-.947.16-1.667.98-1.667 1.966V22c0 .987.72 1.807 1.667 1.967v.7c0 .366.3.666.666.666m-1-3.333v-6.667c0-.366.3-.666.667-.666h.667c.366 0 .666.3.666.666V22c0 .367-.3.667-.666.667H8A.67.67 0 0 1 7.333 22' />
      <path d='M26 12.667c-.367 0-.667.3-.667.666v12A3.335 3.335 0 0 1 22 28.667H6.667a3.335 3.335 0 0 1-3.334-3.334V12a3.335 3.335 0 0 1 3.334-3.333h12c.366 0 .666-.3.666-.667s-.3-.667-.666-.667h-12A4.67 4.67 0 0 0 2 12v13.333A4.67 4.67 0 0 0 6.667 30H22a4.67 4.67 0 0 0 4.667-4.667v-12c0-.366-.3-.666-.667-.666' />
      <path d='M21.28 13.08s-.007-.013-.013-.02a.5.5 0 0 0-.12-.173.2.2 0 0 0-.054-.047.5.5 0 0 0-.14-.093c-.02-.014-.04-.02-.066-.034a.7.7 0 0 0-.234-.046H19.32c-.367 0-.667.3-.667.666 0 .287.18.527.434.627l-2.434 2.433L14.46 14.2a.664.664 0 0 0-.94 0l-1.32 1.32a.676.676 0 0 0-.093.853c.206.307.62.387.926.187 0 0 .254-.24.287-.267l.68-.68 2.193 2.194c.134.133.3.193.474.193.173 0 .34-.067.473-.193l2.907-2.907c.093.253.333.44.62.44.366 0 .666-.3.666-.667v-1.3599999999999999a.6.6 0 0 0-.046-.233zM26.667 2H24a3.335 3.335 0 0 0-3.333 3.333V10c0 .733.6 1.333 1.333 1.333h4.667A3.334 3.334 0 0 0 30 8V5.333A3.335 3.335 0 0 0 26.667 2m2 6c0 1.1-.9 2-2 2H22V5.333c0-1.1.9-2 2-2h2.667c1.1 0 2 .9 2 2z' />
      <path d='M26.667 4.667c-.367 0-.667.3-.667.666V8c0 .367.3.667.667.667.366 0 .666-.3.666-.667V5.333c0-.366-.3-.666-.666-.666M24 6.667c-.367 0-.667.3-.667.666V8c0 .367.3.667.667.667s.667-.3.667-.667v-.667c0-.366-.3-.666-.667-.666' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeStraightforwardTradingIcon);
export default ForwardRef;
