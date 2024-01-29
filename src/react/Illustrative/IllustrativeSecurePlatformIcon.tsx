import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeSecurePlatformIcon = (
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
      <path d='M8.667 25.868h-4c-.367 0-.667.3-.667.667s.3.667.667.667h4c.366 0 .666-.3.666-.667s-.3-.667-.666-.667M30 10.668c-.367 0-.667.3-.667.667v8.667c0 1.1-.9 2-2 2H14c-.367 0-.667.3-.667.666s.3.667.667.667h2.667v2H14c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h6.667c.366 0 .666-.3.666-.666s-.3-.667-.666-.667H18v-2h9.333a3.335 3.335 0 0 0 3.334-3.333v-8.667c0-.367-.3-.667-.667-.667M4.667 11.335c.366 0 .666-.3.666-.667v-2c0-1.1.9-2 2-2h14c.367 0 .667-.3.667-.666s-.3-.667-.667-.667h-14A3.335 3.335 0 0 0 4 8.668v2c0 .367.3.667.667.667' />
      <path d='M9.333 12.668H4a2.666 2.666 0 0 0-2.667 2.667v12A2.666 2.666 0 0 0 4 30.002h5.333A2.666 2.666 0 0 0 12 27.335v-12a2.666 2.666 0 0 0-2.667-2.667m1.334 14.667c0 .733-.6 1.333-1.334 1.333H4c-.733 0-1.333-.6-1.333-1.333v-12c0-.733.6-1.333 1.333-1.333h5.333c.734 0 1.334.6 1.334 1.333zM30 2.002c-.387 0-1.667-.367-2.453-.634a.65.65 0 0 0-.42 0c-.787.26-2.074.634-2.454.634a.66.66 0 0 0-.666.666v4c0 1.66 2.526 3.007 3.033 3.26a.67.67 0 0 0 .567.02c.033-.013 3.066-1.353 3.066-3.28v-4c0-.366-.3-.666-.666-.666zm-.667 4.666c0 .66-1.246 1.527-1.986 1.92-.92-.52-2.014-1.38-2.014-1.92v-3.42c.694-.14 1.567-.406 2-.546.434.14 1.307.413 2 .546z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeSecurePlatformIcon);
export default ForwardRef;
