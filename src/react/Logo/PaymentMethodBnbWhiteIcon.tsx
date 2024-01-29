import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodBnbWhiteIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M13.295 40.004 8.646 44.65 4 40.004l4.646-4.646zM24.577 28.72l7.965 7.965 4.643-4.636-12.61-12.62-12.61 12.62 4.645 4.646zm15.93 6.637-4.647 4.646 4.644 4.646 4.646-4.646zm-15.93 15.929-7.964-7.965-4.649 4.641 12.61 12.608 12.611-12.608-4.646-4.646zm0-6.637 4.647-4.646-4.647-4.646-4.646 4.646zm29.87-15.931h10.48c2.58 0 4.611.71 5.9 1.998a5.18 5.18 0 0 1 1.547 3.837v.063c0 2.549-1.354 3.968-2.966 4.87 2.608 1 4.223 2.515 4.223 5.546v.06c0 4.127-3.352 6.19-8.447 6.19h-10.74zm9.415 9.13c2.194 0 3.579-.707 3.579-2.384V35.4c0-1.482-1.161-2.322-3.256-2.322h-4.904v4.763zm1.322 9.094c2.194 0 3.514-.783 3.514-2.45v-.065c0-1.515-1.127-2.45-3.675-2.45h-5.74v4.957zM78.53 28.727h4.581l10.576 13.896V28.719h4.9v22.567H94.36L83.43 36.94v14.347h-4.902zm26.278 0h10.487c2.58 0 4.612.71 5.901 1.998a5.19 5.19 0 0 1 1.547 3.837v.063c0 2.548-1.354 3.968-2.966 4.87 2.608 1 4.223 2.515 4.223 5.546v.053c0 4.126-3.352 6.19-8.447 6.19h-10.748zm9.415 9.13c2.194 0 3.579-.707 3.579-2.384v-.066c0-1.481-1.161-2.321-3.256-2.321h-4.904v4.755zm1.333 9.078c2.194 0 3.514-.782 3.514-2.45v-.065c0-1.515-1.127-2.45-3.676-2.45h-5.739v4.957z'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodBnbWhiteIcon);
export default ForwardRef;
