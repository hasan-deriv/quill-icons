import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLocationCrosshairsBoldIcon = (
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
    <path d='M16 6.5q.859.078.938.938v1.64q2.578.352 4.375 2.11 1.757 1.796 2.148 4.374h1.602q.858.079.937.938-.079.859-.937.938H23.46q-.39 2.578-2.148 4.375-1.797 1.757-4.375 2.148v1.602q-.079.858-.938.937-.86-.079-.937-.937V23.96q-2.58-.39-4.376-2.148-1.756-1.797-2.109-4.375h-1.64q-.86-.079-.938-.938.078-.86.938-.937h1.64q.352-2.58 2.11-4.376 1.796-1.756 4.374-2.109v-1.64q.079-.86.938-.938m-5.625 10q0 1.523.742 2.813a5.64 5.64 0 0 0 2.07 2.07 5.7 5.7 0 0 0 2.813.742 5.7 5.7 0 0 0 2.813-.742 5.64 5.64 0 0 0 2.07-2.07q.742-1.29.742-2.813a5.54 5.54 0 0 0-.742-2.812 5.64 5.64 0 0 0-2.07-2.07A5.7 5.7 0 0 0 16 10.874a5.7 5.7 0 0 0-2.812.742 5.64 5.64 0 0 0-2.07 2.07 5.54 5.54 0 0 0-.743 2.813m7.5 0q-.039-1.055-.937-1.64-.937-.47-1.875 0-.9.585-.938 1.64.038 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64m-5.625 0q0-1.015.508-1.875A3.759 3.759 0 0 1 16 12.75a3.76 3.76 0 0 1 3.242 1.875 3.6 3.6 0 0 1 .508 1.875 3.6 3.6 0 0 1-.508 1.875A3.759 3.759 0 0 1 16 20.25a3.76 3.76 0 0 1-3.242-1.875 3.6 3.6 0 0 1-.508-1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationCrosshairsBoldIcon);
export default ForwardRef;
