import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodTronBrandIcon = (
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
    <g fill='#000'>
      <path d='M111.321 49.351h2.023v-7.883l-2.023-2.249z' />
      <path d='M121.973 30.703V45.32l-14.309-15.903v19.935h2.018v-14.62L124 50.638V30.703zM94.566 30.694c-5.143 0-9.324 4.181-9.324 9.324s4.18 9.324 9.324 9.324c5.142 0 9.323-4.181 9.323-9.324 0-5.138-4.18-9.324-9.323-9.324m0 16.639c-4.032 0-7.315-3.278-7.315-7.315a7.32 7.32 0 0 1 7.315-7.314c4.032 0 7.314 3.278 7.314 7.314 0 4.032-3.282 7.315-7.314 7.315' />
      <path d='M94.565 38.677a1.341 1.341 0 1 0 0 2.683 1.341 1.341 0 0 0 0-2.683M81.733 36.424c0-3.151-2.546-5.716-5.675-5.716H65.393v18.648h1.991V32.73h8.674c2.009 0 3.643 1.657 3.643 3.693 0 2.027-1.611 3.675-3.603 3.698l-7.075-.005v9.239h1.991V42.14h4.664l3.811 7.211h2.316l-3.977-7.495c2.298-.763 3.905-2.985 3.905-5.432M52.316 36.248h-2.004v13.09h2.004zM61.297 30.703h-16.34v2.005h16.34zM55.938 36.248h-2.005v13.09h2.005zM31.172 27.01 4 22.012l14.3 35.977 19.92-24.274zm-.433 2.203 4.158 3.951-11.369 2.059zm-9.68 5.599L9.074 24.874l19.582 3.603zm-.859 1.761-1.95 16.15L7.716 26.212zm1.806.853 12.589-2.28L20.16 52.737z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodTronBrandIcon);
export default ForwardRef;
