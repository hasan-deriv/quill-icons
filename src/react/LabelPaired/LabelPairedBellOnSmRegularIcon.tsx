import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.82 3.996q.165.355-.191.574l-1.75.875q-.383.165-.574-.191-.165-.383.191-.574l1.75-.875q.355-.165.574.191m-8.257.192Q8.59 3.777 9 3.75q.41.027.438.438v.464q1.695.192 2.789 1.395Q13.347 7.25 13.375 9v.793a4.56 4.56 0 0 0 1.313 3.2l.082.081q.355.356.355.848a1.1 1.1 0 0 1-.355.848 1.1 1.1 0 0 1-.848.355H4.078q-.52 0-.848-.355a1.1 1.1 0 0 1-.355-.848q0-.492.355-.875l.083-.055a4.56 4.56 0 0 0 1.312-3.199V9q.055-1.75 1.148-2.953 1.095-1.203 2.79-1.395zM9 5.5q-1.476.027-2.488 1.012Q5.527 7.523 5.5 9v.793q-.027 2.216-1.586 3.8l-.055.083a.34.34 0 0 0-.109.246q.027.3.328.328h9.844q.3-.027.328-.328a.34.34 0 0 0-.11-.246l-.054-.082q-1.56-1.586-1.586-3.801V9q-.027-1.476-1.04-2.488Q10.478 5.527 9 5.5m-.82 10.8q.219.548.82.575.601-.027.82-.574.165-.383.575-.274.355.165.246.547a1.83 1.83 0 0 1-.63.848A1.64 1.64 0 0 1 9 17.75q-.574 0-1.012-.328a1.83 1.83 0 0 1-.629-.848q-.109-.382.246-.547.41-.109.575.274M.25 8.563q.027-.41.438-.437h2.187q.41.027.438.438-.029.41-.438.437H.688Q.277 8.973.25 8.563m14.875-.437h2.188q.41.027.437.438-.027.41-.437.437h-2.188q-.41-.027-.437-.437.027-.411.437-.438M1.371 4.57q-.355-.219-.191-.574.191-.355.574-.191l1.75.875q.355.191.191.574-.191.355-.574.191z' />
    </g>
    <defs>
      <clipPath id='3bc9a9690b9845a7662c608a246b4eac__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnSmRegularIcon);
export default ForwardRef;
