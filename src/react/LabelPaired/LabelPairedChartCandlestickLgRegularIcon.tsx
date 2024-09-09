import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 7.375v13.75C1.25 22.18 2.07 23 3.125 23h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.125C1.367 24.25 0 22.883 0 21.125V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m11.25 0V9.29c.703.155 1.25.78 1.25 1.523v3.124c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V15.5c-.742-.156-1.25-.781-1.25-1.562v-3.126c0-.742.508-1.367 1.25-1.523V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M6.875 8c.313 0 .625.313.625.625v1.915c.703.155 1.25.78 1.25 1.523v4.374c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V18C5.508 17.844 5 17.219 5 16.438v-4.375c0-.743.508-1.368 1.25-1.524V8.625c0-.312.273-.625.625-.625m5.625 2.813a.336.336 0 0 0-.312-.313h-.626a.31.31 0 0 0-.312.313v3.124c0 .196.117.313.313.313h.624a.31.31 0 0 0 .313-.312zm4.063 3.437a.31.31 0 0 0-.313.313v1.874c0 .196.117.313.313.313h.625a.31.31 0 0 0 .312-.312v-1.875a.336.336 0 0 0-.312-.313zM16.25 13v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.915c.703.155 1.25.78 1.25 1.523v1.874c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V18c-.742-.156-1.25-.781-1.25-1.562v-1.875c0-.743.508-1.368 1.25-1.524zm-9.062-1.25h-.625a.31.31 0 0 0-.313.313v4.374c0 .196.117.313.313.313h.625a.31.31 0 0 0 .312-.312v-4.375a.336.336 0 0 0-.312-.313' />
    </g>
    <defs>
      <clipPath id='00566a542dee623a59268db27ed6ee87__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickLgRegularIcon);
export default ForwardRef;
