import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBadgeCheckBoldIcon = (
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
    <path d='M13.813 9.703q-.391.625-1.094.43-1.368-.39-2.461.625-1.016 1.094-.625 2.46.195.704-.43 1.095-1.25.702-1.328 2.187.078 1.485 1.328 2.188.625.39.43 1.093-.39 1.368.625 2.461 1.094 1.016 2.46.625.704-.195 1.095.43.702 1.25 2.187 1.328 1.485-.078 2.188-1.328.39-.625 1.093-.43 1.368.352 2.461-.625 1.016-1.094.625-2.46-.195-.704.469-1.094 1.21-.704 1.289-2.188-.078-1.485-1.29-2.187-.663-.391-.468-1.094.39-1.368-.625-2.461-1.094-1.016-2.46-.625-.704.195-1.094-.43-.704-1.25-2.188-1.328-1.485.078-2.187 1.328M16 6.5q2.187.078 3.438 1.68 2.031-.235 3.632 1.25 1.485 1.6 1.25 3.633 1.602 1.25 1.68 3.437-.078 2.187-1.68 3.438.235 2.031-1.25 3.632-1.6 1.485-3.633 1.25-1.25 1.602-3.437 1.68-2.187-.078-3.437-1.68-2.032.235-3.633-1.25-1.485-1.6-1.25-3.633Q6.078 18.688 6 16.5q.078-2.187 1.68-3.437-.235-2.032 1.25-3.633 1.6-1.485 3.633-1.25Q13.813 6.578 16 6.5m4.414 8.164-5 5q-.664.547-1.328 0l-2.5-2.5q-.548-.664 0-1.328.664-.548 1.328 0l1.836 1.836 4.336-4.336q.664-.548 1.328 0 .547.664 0 1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBadgeCheckBoldIcon);
export default ForwardRef;
