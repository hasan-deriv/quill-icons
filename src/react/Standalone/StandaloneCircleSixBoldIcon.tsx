import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleSixBoldIcon = (
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
    <path d='M24.125 16.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.625-1.446-8.125 0-2.54 1.484-4.063 4.14-4.063 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.124 0 2.5-1.484 4.063-4.14 4.063-7.07M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10 3.125c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.875a1.87 1.87 0 0 0 1.64.937m-3.75-1.875c0-1.25.547-2.46 1.484-3.281l3.204-2.735a.974.974 0 0 1 1.328.118.974.974 0 0 1-.118 1.328l-1.132.976a3.74 3.74 0 0 1 2.734 3.594 3.751 3.751 0 0 1-7.5 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSixBoldIcon);
export default ForwardRef;
