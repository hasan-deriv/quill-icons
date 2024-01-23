import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeMinimalCapitalIcon = (
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
      <path d='M10.667 20c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666H9.333V18c0-.367-.3-.667-.666-.667-.367 0-.667.3-.667.667v.667h-.667C6.6 18.667 6 19.267 6 20v1.333c0 .734.6 1.334 1.333 1.334H10V24H6.667C6.3 24 6 24.3 6 24.667c0 .366.3.666.667.666H8V26c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.667H10c.733 0 1.333-.6 1.333-1.333v-1.333c0-.734-.6-1.334-1.333-1.334H7.333V20z' />
      <path d='M8.667 14.667A7.338 7.338 0 0 0 1.333 22a7.338 7.338 0 0 0 7.334 7.333A7.338 7.338 0 0 0 16 22a7.338 7.338 0 0 0-7.333-7.333m0 13.333c-3.307 0-6-2.693-6-6s2.693-6 6-6c3.306 0 6 2.693 6 6s-2.694 6-6 6' />
      <path d='M13.333 12a8.92 8.92 0 0 0-2.18.273.664.664 0 0 0-.48.814c.094.36.454.573.814.48a7.338 7.338 0 0 1 9.18 7.1 7.29 7.29 0 0 1-5.154 7 .665.665 0 0 0 .2 1.3.688.688 0 0 0 .2-.027A8.63 8.63 0 0 0 22 20.66c0-4.78-3.887-8.667-8.667-8.667z' />
      <path d='M20.333 8.667c-1.506 0-2.966.32-4.326.946a.669.669 0 0 0 .56 1.213 8.91 8.91 0 0 1 3.766-.82c4.96 0 9 4.04 9 9s-3.726 8.72-8.486 8.987a.664.664 0 0 0 .04 1.327h.04c5.466-.307 9.746-4.833 9.746-10.32S26.04 8.667 20.34 8.667zM3.333 13.333c.174 0 .34-.066.474-.193l3.526-3.527.86.86c.26.26.68.26.94 0l3.527-3.526.86.86c.26.26.68.26.94 0L17.367 4.9c.093.253.333.44.62.44.366 0 .666-.3.666-.667V3.313a.582.582 0 0 0-.046-.233s-.007-.013-.014-.02a.537.537 0 0 0-.12-.173.18.18 0 0 0-.053-.047.514.514 0 0 0-.14-.093c-.02-.014-.04-.02-.067-.034a.692.692 0 0 0-.233-.046h-1.333c-.367 0-.667.3-.667.666 0 .287.18.527.433.627L13.98 6.393l-.86-.86a.664.664 0 0 0-.94 0L8.653 9.06l-.86-.86a.664.664 0 0 0-.94 0l-4 4a.664.664 0 0 0 .474 1.133z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeMinimalCapitalIcon);
export default ForwardRef;
