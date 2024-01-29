import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneScissorsBoldIcon = (
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
    <path d='M25.766 23.648q-.586.625-1.29.118l-6.288-5.235 1.484-1.21 5.976 5.038q.625.586.118 1.29M10.375 8.375q-1.406.04-2.148 1.25-.705 1.25 0 2.5.741 1.21 2.148 1.25 1.407-.04 2.148-1.25.705-1.25 0-2.5-.741-1.21-2.148-1.25m0-1.875q1.875.039 3.086 1.29Q14.71 9 14.75 10.874q0 1.054-.469 1.953l2.969 2.461 7.227-6.055q.702-.508 1.289.118.508.702-.118 1.289l-11.367 9.53q.47.899.469 1.954-.039 1.875-1.29 3.086-1.21 1.25-3.085 1.289-1.875-.039-3.086-1.29Q6.04 24 6 22.126q.039-1.875 1.29-3.086 1.21-1.25 3.085-1.289 1.602.04 2.734.977l2.657-2.227-2.657-2.227q-1.132.938-2.734.977-1.875-.039-3.086-1.29Q6.04 12.75 6 10.876 6.039 9 7.29 7.789 8.5 6.54 10.374 6.5m2.5 15.625q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneScissorsBoldIcon);
export default ForwardRef;
