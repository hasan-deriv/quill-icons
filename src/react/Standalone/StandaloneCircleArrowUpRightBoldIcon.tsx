import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleArrowUpRightBoldIcon = (
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
    <path d='M16 24.625c1.484 0 2.839-.365 4.063-1.094 1.224-.703 2.213-1.692 2.968-2.968a8.061 8.061 0 0 0 1.094-4.063 8.061 8.061 0 0 0-1.094-4.062c-.755-1.277-1.744-2.266-2.968-2.97C18.839 8.74 17.484 8.376 16 8.376c-1.484 0-2.838.365-4.062 1.094-1.225.703-2.214 1.693-2.97 2.969A8.062 8.062 0 0 0 7.876 16.5c0 1.432.365 2.787 1.094 4.063.755 1.276 1.745 2.265 2.969 2.968 1.223.73 2.578 1.094 4.062 1.094M16 6.5c1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.411 1.328-5C8.266 9.938 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328m-2.5 5.625h5.938c.572.052.885.365.937.938v6.25c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937v-3.985l-5.273 5.274c-.443.364-.886.364-1.329 0-.364-.443-.364-.886 0-1.329L17.172 14H13.5c-.573-.052-.885-.365-.937-.937.052-.573.364-.886.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleArrowUpRightBoldIcon);
export default ForwardRef;
