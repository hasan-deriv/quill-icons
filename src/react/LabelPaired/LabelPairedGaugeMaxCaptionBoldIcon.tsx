import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m.75 2.625c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75M6 13.063a1.31 1.31 0 0 1-1.312-1.313c0-.703.585-1.312 1.312-1.312.234 0 .445.07.656.187l2.578-1.758a.54.54 0 0 1 .774.14.54.54 0 0 1-.14.774l-2.579 1.781c0 .07.024.118.024.188 0 .727-.61 1.313-1.313 1.313M9 7.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-6.375 1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75M4.5 7.25c0 .422-.352.75-.75.75A.74.74 0 0 1 3 7.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='bd753d5fdcf2652fad4257b511345b5e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxCaptionBoldIcon);
export default ForwardRef;
