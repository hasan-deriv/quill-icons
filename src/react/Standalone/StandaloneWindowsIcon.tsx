import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWindowsIcon = (
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
    <path d='M7.25 10.172v5.937h7.188V9.156zm0 12.656v-5.86h7.188v6.876zm7.969 1.094v-6.953h9.531v8.281zm0-14.844L24.75 7.75v8.36h-9.531z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowsIcon);
export default ForwardRef;
