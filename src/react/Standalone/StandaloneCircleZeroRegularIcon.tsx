import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleZeroRegularIcon = (
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
    <path d='M16 7.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C9.984 23.609 12.836 25.25 16 25.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C21.976 9.43 19.124 7.75 16 7.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m0-15c2.07 0 3.75 1.68 3.75 3.75v2.5a3.751 3.751 0 0 1-7.5 0v-2.5c0-2.07 1.68-3.75 3.75-3.75m-2.5 3.75v2.5c0 1.406 1.094 2.5 2.5 2.5 1.367 0 2.5-1.094 2.5-2.5v-2.5c0-1.367-1.133-2.5-2.5-2.5a2.49 2.49 0 0 0-2.5 2.5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleZeroRegularIcon);
export default ForwardRef;
