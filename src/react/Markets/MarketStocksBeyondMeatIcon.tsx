import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksBeyondMeatIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#6dfc1e9672528b85f2ec51ce35b92bf4__a)'>
      <path
        fill='#fff'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#6BC746'
        d='m26.488 16.184-.5.039c-.14 0-.294.013-.448.013h-.333l-.282-.013a12 12 0 0 1-.627-.064 13.3 13.3 0 0 1-2.804-.73l-.333-.14c-.23-.103-.474-.193-.704-.295-.807-.346-1.652-.692-2.51-.96a7.4 7.4 0 0 0-1.971-.334h-.077c-.32-.012-.64.013-.96.052a8 8 0 0 0-1.114.23c.115-.14.218-.281.333-.422.23-.32.397-.679.486-1.05.103-.282.103-.59.026-.87.205-.129.46-.347.627-.513a9 9 0 0 1 1.998-1.152 8.15 8.15 0 0 1 3.943-.602c3.995.397 5.531 1.255 8.335-1.857C24.85.026 14.964-2.227 7.474 2.472a16 16 0 0 0-5.953 6.722c.704.678 2.125 1.357 4.89.73a3.87 3.87 0 0 1 3.7 0c4.79 1.075 5.545-1.742 5.545-1.742 0 1.985-.794 2.868-1.998 3.227.09.038.18.076.256.128.257.166.308.384.193.78a2.7 2.7 0 0 1-.397.871c-.461.615-.96 1.204-1.447 1.793 0 .064.051.128.115.128a.5.5 0 0 0 .14-.051 7.8 7.8 0 0 1 2.497-.769 6.3 6.3 0 0 1 2.753.27c1.076.345 2.126.806 3.176 1.241l.345.141c.948.41 1.946.679 2.97.781.423.051.846.09 1.268.09.346 0 .743-.013 1.063-.052v9.321a.73.73 0 0 1-.704.756h-.052c-.384-.013-.69-.333-.716-.717l-.052-.858a13.7 13.7 0 0 0-1.203-4.072l-.692 2.203c-.23.717-.448 1.434-.678 2.138l-.243.832a.66.66 0 0 1-.82.436c-.026 0-.038-.013-.064-.026a.63.63 0 0 1-.397-.653c.23-1.805.307-3.623.23-5.442a11.06 11.06 0 0 1-5.94 1.64c-.051 1.28-.115 2.457-.167 3.75v.077a.683.683 0 0 1-.678.68h-.051a.71.71 0 0 1-.615-.616l-.154-1.126-.41-2.574h-.089c-.128.832-.23 1.665-.346 2.51l-.14 1.165a.69.69 0 0 1-.769.602l-.038-.013a.7.7 0 0 1-.563-.679l-.052-1.37a187 187 0 0 0-.14-2.753.7.7 0 0 0-.141-.281l-.013-.013c-.538-.82-.96-1.716-1.242-2.663-.205-.666-.397-1.344-.602-2.023.41-.154.768-.397 1.076-.704.064-.115-.064-.243-.205-.154-.244.141-.512.243-.781.295-.474.038-.96.025-1.447.012a.925.925 0 0 1-.973-.896 2.9 2.9 0 0 0-.077-.806 8.1 8.1 0 0 1-.627-2.804c0-.192-.064-.27-.192-.295-.372.013-.73.026-1.076.013-1.639-.026-2.996-.32-3.572-1.69-3.316 8.194.627 17.528 8.809 20.844s17.528-.627 20.844-8.809c1.037-2.56 1.396-5.352 1.037-8.092a9.94 9.94 0 0 1-5.377 2.28'
      />
    </g>
    <defs>
      <clipPath id='6dfc1e9672528b85f2ec51ce35b92bf4__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBeyondMeatIcon);
export default ForwardRef;
