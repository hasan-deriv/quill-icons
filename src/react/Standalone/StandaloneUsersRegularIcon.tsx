import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUsersRegularIcon = (
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
    <path d='M7.25 9.625q.04 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64-.039-1.055-.937-1.64-.938-.47-1.876 0-.897.585-.937 1.64m5 0q-.04 1.758-1.562 2.695-1.563.86-3.126 0Q6.04 11.383 6 9.625q.039-1.758 1.563-2.695 1.562-.86 3.125 0 1.523.937 1.562 2.695M16 12.75q-1.406.04-2.148 1.25-.705 1.25 0 2.5.741 1.21 2.148 1.25 1.407-.04 2.148-1.25.705-1.25 0-2.5-.741-1.21-2.148-1.25M16 19a3.6 3.6 0 0 1-1.875-.508 3.759 3.759 0 0 1-1.875-3.242 3.76 3.76 0 0 1 1.875-3.242A3.6 3.6 0 0 1 16 11.5q1.015 0 1.875.508a3.759 3.759 0 0 1 1.875 3.242 3.76 3.76 0 0 1-1.875 3.242A3.6 3.6 0 0 1 16 19m-2.305 2.5q-1.601.038-2.734 1.094-1.095 1.054-1.211 2.656h12.5q-.117-1.602-1.21-2.656-1.134-1.055-2.735-1.094zm0-1.25h4.61q2.187.04 3.672 1.523 1.484 1.485 1.523 3.672-.078.977-1.055 1.055H9.555q-.977-.078-1.055-1.055.04-2.187 1.523-3.672 1.485-1.484 3.672-1.523M23.5 7.75q-1.055.04-1.64.938-.47.937 0 1.874.585.9 1.64.938 1.055-.039 1.64-.937.47-.938 0-1.876-.585-.897-1.64-.937m0 5q-1.758-.04-2.695-1.562-.86-1.563 0-3.126Q21.742 6.54 23.5 6.5q1.758.039 2.695 1.563.86 1.562 0 3.124-.937 1.524-2.695 1.563m.625 2.5H21q0-.665-.156-1.25h3.281q1.875.039 3.086 1.29 1.25 1.21 1.289 3.085-.039.585-.625.625-.585-.039-.625-.625-.04-1.328-.898-2.227-.9-.858-2.227-.898M11 15.25H7.875q-1.328.039-2.227.898-.859.9-.898 2.227-.039.585-.625.625-.586-.039-.625-.625.039-1.875 1.29-3.086Q6 14.04 7.874 14h3.281Q11 14.585 11 15.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUsersRegularIcon);
export default ForwardRef;
