import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateSmBoldIcon = (
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
      <path d='M12.25 16.438a.45.45 0 0 0 .438-.438V8.125H10.5a.864.864 0 0 1-.875-.875V5.063H5.25a.45.45 0 0 0-.437.437v1.86a1.66 1.66 0 0 0-1.149 0c-.055.027-.137.081-.164.081v.028V5.5c0-.957.766-1.75 1.75-1.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23V16c0 .984-.793 1.75-1.75 1.75H6.043c.055-.137.082-.273.082-.437v-.875zM2.98 8.18l.41.164a.23.23 0 0 0 .192 0l.438-.164a.65.65 0 0 1 .765.218l.274.356a.15.15 0 0 0 .136.082l.465.055c.3.054.52.273.574.574l.055.465c0 .054.027.11.082.136l.383.274c.219.191.3.52.191.793l-.164.41c-.027.055-.027.137 0 .164l.164.438c.11.273.028.601-.218.765l-.356.3a.15.15 0 0 0-.082.138l-.055.464a.7.7 0 0 1-.574.575l-.41.054v2.871c0 .165-.11.329-.246.41a.5.5 0 0 1-.438-.027l-1.066-.71-1.094.71c-.11.082-.3.082-.437.028a.48.48 0 0 1-.219-.41V14.44l-.437-.054a.7.7 0 0 1-.575-.575l-.054-.464a.15.15 0 0 0-.082-.137l-.356-.3c-.246-.165-.328-.493-.219-.766l.192-.41v-.192l-.192-.41c-.109-.274-.027-.602.22-.766l.355-.3a.15.15 0 0 0 .082-.137l.082-.465c.027-.3.246-.52.547-.574l.464-.055a.15.15 0 0 0 .137-.082l.3-.356c.165-.246.493-.328.766-.218m-1.23 3.445c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531 0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504' />
    </g>
    <defs>
      <clipPath id='8190af81a72c795f94b6eed435af90e0__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateSmBoldIcon);
export default ForwardRef;
