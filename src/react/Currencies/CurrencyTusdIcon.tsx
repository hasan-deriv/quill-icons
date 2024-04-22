import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyTusdIcon = (
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
    <g clipPath='url(#8d5948ba973f7150cd4910fe55116442__a)'>
      <path
        fill='#002868'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M19.776 8.804c.106 0 .192.086.192.192v1.664a.193.193 0 0 1-.192.192h-2.642v5.184a.193.193 0 0 1-.191.192h-1.664a.193.193 0 0 1-.192-.192l-.001-5.184h-2.862a.193.193 0 0 1-.192-.192V8.996c0-.106.086-.192.192-.192zM20.536 20.893h.574c.56 0 .992.438.992 1.044 0 .605-.432 1.043-.986 1.042h-.58a.09.09 0 0 1-.092-.091V20.99c0-.051.041-.097.092-.097'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M24.064 6.4A1.54 1.54 0 0 1 25.6 7.936v16.128a1.54 1.54 0 0 1-1.536 1.536H7.936A1.54 1.54 0 0 1 6.4 24.064V7.936A1.54 1.54 0 0 1 7.936 6.4zm0 .256H7.936c-.704 0-1.28.576-1.28 1.28v10.112c0 .14.115.256.256.256h18.176c.14 0 .256-.115.256-.256V7.936c0-.704-.576-1.28-1.28-1.28M13.306 20.304a.1.1 0 0 0-.097-.097h-.61c-.051 0-.092.046-.092.097v1.76c0 1.044.585 1.65 1.516 1.65.936 0 1.527-.606 1.527-1.65v-1.76a.1.1 0 0 0-.097-.097h-.61c-.051 0-.092.046-.092.097v1.786c0 .514-.265.88-.723.88s-.722-.366-.722-.88zm5.69.917c-.113-.632-.657-1.054-1.44-1.054-.87 0-1.425.463-1.425 1.11 0 .646.488.85 1.19.94.61.077.916.133.916.444 0 .259-.29.38-.621.38-.376 0-.636-.187-.712-.432q-.028-.084-.133-.086h-.56c-.07 0-.107.026-.096.096.096.738.717 1.09 1.44 1.09.834 0 1.485-.392 1.485-1.136 0-.66-.478-.915-1.313-1.012-.549-.066-.798-.163-.798-.397 0-.214.27-.326.59-.326.356 0 .59.158.697.407.03.061.056.092.137.092h.56c.077 0 .098-.046.082-.116m-7.043-.917a.1.1 0 0 0-.097-.097H9.053a.1.1 0 0 0-.097.097v.499c0 .05.046.091.097.091h.91c.051 0 .092.046.092.097v2.58c0 .05.041.096.092.096h.615c.05 0 .092-.046.092-.096v-2.58a.1.1 0 0 1 .096-.097h.906c.05 0 .097-.04.097-.091zm10.99 1.644c0-1.033-.8-1.74-1.828-1.74h-1.383c-.05 0-.092.045-.092.096v3.267c0 .05.041.096.092.096h1.384c1.038 0 1.826-.702 1.826-1.72'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='8d5948ba973f7150cd4910fe55116442__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyTusdIcon);
export default ForwardRef;
