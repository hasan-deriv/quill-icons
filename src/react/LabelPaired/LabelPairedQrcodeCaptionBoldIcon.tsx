import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.625 5.375h-2.25v2.25h2.25zM1.375 4.25h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-2.25q.024-.468.328-.797.329-.304.797-.328m2.25 7.125h-2.25v2.25h2.25zm-2.25-1.125h2.25q.469.024.797.328.304.329.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-2.25q.024-.468.328-.797.329-.304.797-.328m6-4.875v2.25h2.25v-2.25zm-1.125 0q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm-4.312.938q.022-.353.375-.375h.374q.352.022.376.375v.375q-.024.351-.376.375h-.374q-.352-.024-.376-.375zm.375 5.625h.374q.352.023.376.374v.376q-.024.351-.376.374h-.374q-.352-.023-.376-.374v-.376q.024-.351.375-.374m5.624-5.626q.024-.351.375-.375h.376q.351.024.374.375v.375q-.023.353-.374.375h-.376q-.351-.022-.374-.375zM6.25 10.625q.023-.352.375-.375h1.5q.352.023.375.375t.375.375h.75q.352-.023.375-.375t.375-.375q.352.023.375.375v2.25q-.023.352-.375.375h-1.5q-.352-.023-.375-.375t-.375-.375q-.352.023-.375.375v1.5q-.023.352-.375.375h-.75q-.352-.023-.375-.375zM8.875 14q.352.023.375.375-.023.352-.375.375-.352-.023-.375-.375.023-.352.375-.375m1.5 0q.352.023.375.375-.023.352-.375.375-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='67f1013ae7d632ff__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeCaptionBoldIcon);
export default ForwardRef;
