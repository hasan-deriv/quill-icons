import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.469 5.992c-.164.274-.465.41-.766.328a1.75 1.75 0 0 0-1.75.41 1.7 1.7 0 0 0-.41 1.723.72.72 0 0 1-.328.793 1.66 1.66 0 0 0-.902 1.504c0 .684.355 1.258.902 1.531.273.164.41.465.328.766a1.7 1.7 0 0 0 .437 1.723 1.7 1.7 0 0 0 1.723.437c.3-.082.629.055.766.328.3.547.875.902 1.531.902s1.23-.355 1.504-.902a.72.72 0 0 1 .793-.328c.574.191 1.258.027 1.723-.437a1.69 1.69 0 0 0 .41-1.723.665.665 0 0 1 .328-.766c.547-.3.93-.875.93-1.531s-.383-1.23-.93-1.504a.72.72 0 0 1-.328-.793 1.7 1.7 0 0 0-.41-1.723 1.7 1.7 0 0 0-1.723-.41.72.72 0 0 1-.793-.328A1.69 1.69 0 0 0 7 5.062c-.684 0-1.258.383-1.531.93M7 3.75c.957 0 1.832.465 2.406 1.203.903-.137 1.832.164 2.543.848.684.71.957 1.64.848 2.543C13.535 8.918 14 9.793 14 10.75c0 .984-.465 1.86-1.203 2.406a2.99 2.99 0 0 1-.848 2.543c-.71.711-1.64.985-2.543.875-.574.711-1.449 1.176-2.406 1.176-.984 0-1.86-.465-2.406-1.176-.903.11-1.86-.164-2.543-.847a3.03 3.03 0 0 1-.875-2.543A3.13 3.13 0 0 1 0 10.75c0-.957.465-1.832 1.176-2.406A3.1 3.1 0 0 1 2.023 5.8a3.1 3.1 0 0 1 2.543-.848A3.07 3.07 0 0 1 7 3.75m3.09 5.715-3.5 3.5c-.274.273-.684.273-.93 0l-1.75-1.75a.6.6 0 0 1 0-.902c.246-.274.656-.274.93 0l1.285 1.285L9.16 8.562c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903' />
    </g>
    <defs>
      <clipPath id='87446e0840d4c24c8d4dea0af53b9935__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckSmBoldIcon);
export default ForwardRef;
