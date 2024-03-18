import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartMixedBoldIcon = (
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
    <path d='m25.648 9.43-6.562 5.625a.996.996 0 0 1-1.211 0l-4.453-3.907-5.977 3.946a.897.897 0 0 1-1.289-.235c-.312-.43-.195-1.015.235-1.328l6.562-4.375a.94.94 0 0 1 1.133.078l4.414 3.868 5.938-5.118a.974.974 0 0 1 1.328.118.974.974 0 0 1-.118 1.328M13.813 23.375v-6.25a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v6.25c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313M13.5 15.25c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-6.25c0-1.016.82-1.875 1.875-1.875m-4.687 8.125v-2.5a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v2.5c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313M8.5 19c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-2.5c0-1.016.82-1.875 1.875-1.875m10.313.625a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v3.75c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313zm-2.188 0c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875zm7.188 3.75v-6.25a.336.336 0 0 0-.313-.312.31.31 0 0 0-.312.312v6.25c0 .195.117.313.312.313a.31.31 0 0 0 .313-.313M23.5 15.25c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-6.25c0-1.016.82-1.875 1.875-1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartMixedBoldIcon);
export default ForwardRef;
