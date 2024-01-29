import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBackwardFillIcon = (
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
    <path d='M23.969 23.727 17.25 18.14V14.86l6.719-5.587q.585-.468 1.328-.156.664.352.703 1.133v12.5q-.039.78-.703 1.133-.743.312-1.328-.156M16 20.25v2.5q-.039.78-.703 1.133-.743.312-1.328-.156l-7.5-6.25A1.22 1.22 0 0 1 6 16.5q0-.585.469-.977l7.5-6.25q.585-.468 1.328-.156.664.352.703 1.133v10' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardFillIcon);
export default ForwardRef;
