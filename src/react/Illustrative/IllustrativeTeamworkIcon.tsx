import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeTeamworkIcon = (
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
      <path d='M13 19.667c0 1.653 1.347 3 3 3s3-1.347 3-3-1.347-3-3-3-3 1.346-3 3m4.667 0a1.667 1.667 0 1 1-3.335-.002 1.667 1.667 0 0 1 3.335.002M21 19.667c0 1.653 1.347 3 3 3s3-1.347 3-3-1.347-3-3-3-3 1.346-3 3m4.667 0a1.667 1.667 0 1 1-3.335-.002 1.667 1.667 0 0 1 3.335.002M26 23.333c-.367 0-.667.3-.667.667s.3.667.667.667c.733 0 1.333.6 1.333 1.333v2c0 .367-.3.667-.666.667h-5.334a.67.67 0 0 1-.666-.667v-2c0-.733.6-1.333 1.333-1.333.367 0 .667-.3.667-.667s-.3-.667-.667-.667c-.8 0-1.513.36-2 .92-.487-.56-1.2-.92-2-.92-.367 0-.667.3-.667.667s.3.667.667.667c.733 0 1.333.6 1.333 1.333v2c0 .367-.3.667-.666.667h-5.334a.67.67 0 0 1-.666-.667v-2c0-.733.6-1.333 1.333-1.333.367 0 .667-.3.667-.667s-.3-.667-.667-.667c-.8 0-1.513.36-2 .92-.487-.56-1.2-.92-2-.92-.367 0-.667.3-.667.667s.3.667.667.667c.733 0 1.333.6 1.333 1.333v2c0 .367-.3.667-.666.667H5.333A.67.67 0 0 1 4.667 28v-2c0-.733.6-1.333 1.333-1.333.367 0 .667-.3.667-.667s-.3-.667-.667-.667A2.666 2.666 0 0 0 3.333 26v2c0 1.1.9 2 2 2h5.334c.513 0 .98-.2 1.333-.52.353.32.82.52 1.333.52h5.334c.513 0 .98-.2 1.333-.52.353.32.82.52 1.333.52h5.334c1.1 0 2-.9 2-2v-2A2.666 2.666 0 0 0 26 23.333M8 22.667c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.346-3 3 1.347 3 3 3M8 18a1.667 1.667 0 1 1-.001 3.335A1.667 1.667 0 0 1 8 18M15.193 7.807c.134.133.3.193.474.193.173 0 .34-.067.473-.193l.667-.667c.26-.26.26-.68 0-.94l-.194-.193.194-.194a.664.664 0 1 0-.94-.94l-.667.667c-.26.26-.26.68 0 .94l.193.193-.193.194c-.26.26-.26.68 0 .94z' />
      <path d='M8 15.333c.367 0 .667-.3.667-.666v-2c0-.367.3-.667.666-.667h4.12a1.99 1.99 0 0 0 1.88 1.333v1.334c0 .366.3.666.667.666s.667-.3.667-.666v-1.334c.866 0 1.6-.56 1.88-1.333h4.12c.366 0 .666.3.666.667v2c0 .366.3.666.667.666s.667-.3.667-.666v-2c0-1.1-.9-2-2-2h-4v-1.7A3.95 3.95 0 0 0 20 6c0-2.207-1.793-4-4-4s-4 1.793-4 4c0 1.14.48 2.207 1.333 2.967v1.7h-4c-1.1 0-2 .9-2 2v2c0 .366.3.666.667.666M16.667 12h-1.334a.67.67 0 0 1-.666-.667v-.666h2.666v.666c0 .367-.3.667-.666.667M16 3.333A2.666 2.666 0 0 1 18.667 6 2.64 2.64 0 0 1 17.6 8.12a.67.67 0 0 0-.267.533v.68h-2.666v-.68c0-.206-.1-.406-.267-.533A2.64 2.64 0 0 1 13.333 6 2.666 2.666 0 0 1 16 3.333' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeTeamworkIcon);
export default ForwardRef;
