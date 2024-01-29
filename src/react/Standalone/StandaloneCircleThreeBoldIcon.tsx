import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleThreeBoldIcon = (
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
    <path d='M16 8.375q-2.226 0-4.062 1.094-1.837 1.055-2.97 2.969A8.06 8.06 0 0 0 7.876 16.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968 1.835 1.094 4.062 1.094t4.063-1.094q1.836-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q18.226 8.377 16 8.376M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m-2.812-15h5q.624.039.859.586.195.585-.235 1.055l-1.992 1.797q1.29.156 2.07 1.093.82.899.86 2.188-.04 1.406-.977 2.304-.899.938-2.304.977h-1.094q-1.875-.039-2.89-1.602l-.079-.156q-.39-.78.274-1.289.78-.39 1.289.313l.117.156q.468.664 1.289.703h1.094q.585 0 1.015-.39.39-.43.391-1.016 0-.626-.43-1.016-.39-.39-.976-.39h-2.032q-.624-.04-.859-.586-.195-.587.235-1.055l1.953-1.797h-2.578q-.86-.079-.938-.937.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleThreeBoldIcon);
export default ForwardRef;
