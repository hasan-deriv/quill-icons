import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleTwoBoldIcon = (
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
    <path d='M16 8.375q-2.226 0-4.062 1.094-1.837 1.055-2.97 2.969A8.06 8.06 0 0 0 7.876 16.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968 1.835 1.094 4.062 1.094t4.063-1.094q1.836-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q18.226 8.377 16 8.376M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m-1.29-12.773-.937.703q-.741.468-1.328-.196-.468-.702.196-1.289l.937-.742a3.5 3.5 0 0 1 2.149-.703h.117q1.406.078 2.344 1.016.898.938.937 2.343-.04 1.407-1.055 2.422l-2.5 2.344h3.242q.86.078.938.938-.078.858-.937.937h-5.625q-.626-.039-.86-.586-.195-.586.235-1.016l4.218-3.984q.47-.43.469-1.055 0-.624-.43-1.015-.39-.43-1.015-.43l-.117-.039a1.5 1.5 0 0 0-.977.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleTwoBoldIcon);
export default ForwardRef;
