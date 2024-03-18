import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleArrowUpLeftFillIcon = (
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
    <path d='M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m2.5-14.375h-5.937a.925.925 0 0 0-.938.938v6.25c0 .546.39.937.938.937.507 0 .937-.39.937-.937v-3.985l5.273 5.274c.352.39.938.39 1.329 0 .351-.352.351-.938 0-1.329L14.789 14H18.5c.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleArrowUpLeftFillIcon);
export default ForwardRef;
