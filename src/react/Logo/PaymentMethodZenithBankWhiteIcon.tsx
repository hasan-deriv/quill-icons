import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodZenithBankWhiteIcon = (
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
    <g fill='#fff' fillRule='evenodd' clipRule='evenodd'>
      <path d='M39.894 25.679c-.057.131.075-.276.114-.414l.148-.54L44.767 8l49.448.097-54.647 44.448L64.54 22.456l-18.76.053c-.347.001-.694 0-1.04.023-2.225.19-4.153 1.538-4.846 3.147M91.53 38.472c.056-.131-1.495 9.471-4.23 19.397l-51.605.288L91.429 13.02 66.45 43.393l18.76-.053c.347-.001.694 0 1.04-.024 2.225-.189 4.585-3.235 5.279-4.844M42.568 72h-8.782l6.07-8.243h-4.025l.291-2.28h8.363l-6.055 8.23h4.431zm1.656 0 1.347-10.522h6.087l-.295 2.306h-3.446l-.234 1.825h3.25l-.29 2.258h-3.249l-.227 1.776h3.446L50.312 72zm7.878 0 1.347-10.522h2.613l3.06 5.412q.085.165.272.665c.12.334.251.728.392 1.19q.002-.655.03-1.166.027-.507.08-.905l.665-5.196h2.598L61.813 72h-2.6l-3.057-5.434a6 6 0 0 1-.278-.664q-.182-.501-.387-1.176-.005.662-.032 1.173-.027.507-.08.906L54.715 72zm11.909 0 1.347-10.522h2.735L66.746 72zm6.351 0 1.029-8.034h-2.227l.319-2.488h7.16l-.318 2.488h-2.226L73.07 72zm6.257 0 1.346-10.522h2.709l-.524 4.09h3.61l.523-4.09h2.714L85.65 72h-2.714l.548-4.283h-3.609L79.327 72z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodZenithBankWhiteIcon);
export default ForwardRef;
