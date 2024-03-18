import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartCandlestickRegularIcon = (
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
    <path d='M7.25 8.375v13.75C7.25 23.18 8.07 24 9.125 24h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H9.125C7.367 25.25 6 23.883 6 22.125V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m11.25 0v1.915c.703.155 1.25.78 1.25 1.523v3.124c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V16.5c-.742-.156-1.25-.781-1.25-1.562v-3.126c0-.742.508-1.367 1.25-1.523V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M12.875 9c.313 0 .625.313.625.625v1.915c.703.155 1.25.78 1.25 1.523v4.374c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V19c-.742-.156-1.25-.781-1.25-1.562v-4.375c0-.743.508-1.368 1.25-1.524V9.625c0-.312.273-.625.625-.625m5.625 2.813a.336.336 0 0 0-.312-.313h-.625a.31.31 0 0 0-.313.313v3.124c0 .196.117.313.313.313h.625a.31.31 0 0 0 .312-.312zm4.063 3.437a.31.31 0 0 0-.313.313v1.874c0 .196.117.313.313.313h.625a.31.31 0 0 0 .312-.312v-1.875a.336.336 0 0 0-.312-.313zM22.25 14v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.915c.703.155 1.25.78 1.25 1.523v1.874c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V19c-.742-.156-1.25-.781-1.25-1.562v-1.875c0-.743.508-1.368 1.25-1.524zm-9.062-1.25h-.626a.31.31 0 0 0-.312.313v4.374c0 .196.117.313.313.313h.624a.31.31 0 0 0 .313-.312v-4.375a.336.336 0 0 0-.312-.313' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartCandlestickRegularIcon);
export default ForwardRef;
