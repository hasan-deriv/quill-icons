import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodJcbWhiteIcon = (
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
    <g fill='#fff'>
      <path d='M40 16a8 8 0 0 0-8 8v20.282c2.242 1.099 4.573 1.802 6.903 1.802 2.772 0 4.267-1.672 4.267-3.959V32.8h6.862v9.281c0 3.607-2.243 6.554-9.853 6.554-4.314 0-7.745-.882-8.179-.999V64h11.2a8 8 0 0 0 8-8V16zM54.4 24a8 8 0 0 1 8-8h11.2v40a8 8 0 0 1-8 8H54.4V46.475c2.023 1.715 5.542 2.815 11.216 2.551 3.079-.132 6.29-.968 6.29-.968v-3.387c-1.628.792-3.563 1.584-6.07 1.76-4.31.352-6.906-1.76-6.906-5.498 0-3.695 2.595-5.807 6.906-5.499 2.507.176 4.442.924 6.07 1.76v-3.387s-3.255-.836-6.29-.968c-5.674-.264-9.193.836-11.216 2.55zM84.8 16a8 8 0 0 0-8 8v9.118h11.507c.224.002.461.008.64.044 2.55.132 4.442 1.452 4.442 3.739 0 1.803-1.275 3.343-3.65 3.65v.089c2.595.176 4.574 1.627 4.574 3.87 0 2.42-2.2 4.003-5.102 4.003H76.8V64H88a8 8 0 0 0 8-8V16z' />
      <path d='M80.765 45.962h4.619c.066 0 .176-.01.286-.022h.002c.11-.011.218-.022.284-.022.88-.176 1.627-.968 1.627-2.067 0-1.056-.748-1.848-1.627-2.068-.132-.044-.396-.044-.572-.044h-4.619zM87.011 37.429c0-1.056-.748-1.76-1.627-1.892-.04 0-.106-.008-.179-.018a2 2 0 0 0-.261-.026h-4.179v3.871h4.179c.132 0 .396 0 .44-.044.88-.132 1.627-.836 1.627-1.891' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodJcbWhiteIcon);
export default ForwardRef;
