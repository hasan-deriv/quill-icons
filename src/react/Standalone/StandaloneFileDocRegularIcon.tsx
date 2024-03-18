import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileDocRegularIcon = (
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
    <path d='M8.5 25.25h1.25v1.25H8.5A2.47 2.47 0 0 1 6 24V9c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328v4.844h-1.25V14h-4.375a1.85 1.85 0 0 1-1.875-1.875V7.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25m11.21-12.5c-.038-.078-.077-.195-.155-.273l-4.532-4.532c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zm-6.835 7.5h1.25c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-1.25a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m.625 5h.625a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625H13.5zm10.313-5h.625c.859 0 1.562.703 1.562 1.563v.312a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.312a.336.336 0 0 0-.312-.313h-.625a.31.31 0 0 0-.313.313v3.125c0 .195.117.312.313.312h.625a.31.31 0 0 0 .312-.312v-.313c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.313c0 .898-.703 1.562-1.562 1.562h-.625c-.899 0-1.563-.664-1.563-1.562v-3.125c0-.86.664-1.563 1.563-1.563m-6.563 1.563c0-.86.664-1.563 1.563-1.563h.625c.859 0 1.562.703 1.562 1.563v3.125c0 .898-.703 1.562-1.562 1.562h-.625c-.899 0-1.563-.664-1.563-1.562zm1.563-.313a.31.31 0 0 0-.313.313v3.125c0 .195.117.312.313.312h.625a.31.31 0 0 0 .312-.312v-3.125a.336.336 0 0 0-.312-.313z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileDocRegularIcon);
export default ForwardRef;
