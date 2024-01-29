import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLifeRingBoldIcon = (
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
    <path d='m21.04 22.867-3.126-3.125A3.7 3.7 0 0 1 16 20.25q-1.054 0-1.914-.508l-3.125 3.125q2.11 1.719 5.039 1.758 2.93-.039 5.04-1.758m2.655 0 .47.469q.546.664 0 1.328-.665.547-1.33 0l-.468-.469Q19.712 26.422 16 26.5q-3.71-.078-6.367-2.305l-.469.47q-.664.546-1.328 0-.548-.665 0-1.33l.469-.468Q6.078 20.212 6 16.5q.078-3.71 2.305-6.367l-.47-.469q-.546-.664 0-1.328.665-.547 1.33 0l.468.469Q12.289 6.578 16 6.5q3.71.078 6.367 2.305l.469-.47q.664-.546 1.328 0 .547.665 0 1.33l-.469.468Q25.922 12.789 26 16.5q-.078 3.71-2.305 6.367m-1.328-1.328q1.719-2.11 1.758-5.039-.039-2.93-1.758-5.04l-3.125 3.126q.508.859.508 1.914t-.508 1.914zM21.04 10.133Q18.93 8.414 16 8.375q-2.93.039-5.04 1.758l3.126 3.125A3.7 3.7 0 0 1 16 12.75q1.054 0 1.914.508zm-8.281 8.281a3.7 3.7 0 0 1-.508-1.914q0-1.054.508-1.914L9.633 11.46Q7.914 13.57 7.875 16.5q.039 2.93 1.758 5.04zm1.367-1.914q.038 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64-.039-1.055-.937-1.64-.937-.47-1.875 0-.9.585-.938 1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLifeRingBoldIcon);
export default ForwardRef;
