import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleFiveRegularIcon = (
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
    <path d='M16 7.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.25 14.195 7.25 16.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q13.617 25.211 16 25.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.383 7.789 16 7.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m-1.875-15H18.5q.585.039.625.625-.039.585-.625.625h-3.867l-.664 2.578 3.125.313q1.172.156 1.914.937.703.82.742 1.992-.039 1.251-.86 2.07-.819.82-2.07.86h-1.718q-1.72-.04-2.696-1.406l-.039-.117q-.273-.508.156-.86.508-.273.86.156l.078.118q.585.82 1.64.859h1.72q.703 0 1.171-.508.508-.468.508-1.172 0-.663-.43-1.133a1.7 1.7 0 0 0-1.093-.546l-3.868-.391a.6.6 0 0 1-.43-.273.59.59 0 0 1-.077-.508l.937-3.75q.117-.43.586-.469' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleFiveRegularIcon);
export default ForwardRef;
