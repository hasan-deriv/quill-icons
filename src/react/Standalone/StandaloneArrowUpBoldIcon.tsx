import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M16.664 8.023v.04l6.563 6.874c.364.443.364.873 0 1.29-.47.364-.912.364-1.329 0l-4.96-5.196v13.281c-.053.573-.365.886-.938.938-.573-.052-.885-.365-.938-.938v-13.28l-4.96 5.155c-.417.391-.86.404-1.329.04-.364-.417-.364-.86 0-1.329l6.563-6.875A.904.904 0 0 1 16 7.75c.26 0 .482.091.664.273Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpBoldIcon);
export default ForwardRef;
