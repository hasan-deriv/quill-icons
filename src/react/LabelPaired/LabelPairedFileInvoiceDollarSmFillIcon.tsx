import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 3.75h4.375v3.5c0 .492.383.875.875.875h3.5V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m5.25 0 3.5 3.5h-3.5zM2 5.938c0 .246.191.437.438.437h1.75a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438h-1.75A.45.45 0 0 0 2 5.938m0 1.75c0 .246.191.437.438.437h1.75a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438h-1.75A.45.45 0 0 0 2 7.688m3.5 1.968a.45.45 0 0 0-.437.438v.492c-.247.027-.465.11-.684.219a1.25 1.25 0 0 0-.629 1.12c0 .493.273.821.602 1.012.3.192.656.301.957.383h.054c.328.11.602.192.793.328.164.082.192.192.192.301.027.192-.055.301-.192.383a1.02 1.02 0 0 1-.656.137c-.328 0-.629-.11-.984-.219-.082-.027-.137-.055-.192-.082-.246-.055-.492.055-.574.273-.055.246.055.493.273.575.055 0 .137.027.192.054.246.082.52.192.848.246v.465c0 .246.19.438.437.438a.45.45 0 0 0 .438-.438v-.465c.218-.027.464-.109.683-.246.356-.218.629-.601.629-1.12-.027-.52-.3-.848-.629-1.067-.3-.192-.684-.301-.984-.383h-.028c-.355-.11-.601-.191-.793-.3-.164-.11-.191-.192-.191-.274 0-.164.055-.274.219-.356.164-.11.41-.164.629-.164.273.028.574.082.875.164.246.055.492-.082.547-.328.054-.219-.082-.465-.301-.52a6 6 0 0 0-.657-.136v-.492a.47.47 0 0 0-.437-.438' />
    </g>
    <defs>
      <clipPath id='236527eb651e7461c602455767bb066e__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarSmFillIcon);
export default ForwardRef;
