import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodVisaBlackIcon = (
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
      fill='#000'
      d='M77.272 26c2.132-.01 4.247.378 6.238 1.143l-.062-.023-.946 5.87-.625-.313a12.3 12.3 0 0 0-5.21-1.012c-2.72 0-3.96 1.062-3.98 2.337-.02 1.274 1.471 2.104 3.9 3.368 4.02 1.932 5.855 4.269 5.855 7.364 0 5.624-4.787 9.266-12.093 9.266a21.2 21.2 0 0 1-7.76-1.447l1.008-6.069.897.425a13.9 13.9 0 0 0 6.55 1.426c2.005 0 4.172-.83 4.172-2.65.01-1.184-.977-2.074-3.618-3.369-2.64-1.294-6.097-3.469-6.097-7.364.04-5.27 4.888-8.952 11.77-8.952m15.066 2.752a3.425 3.425 0 0 1 3.648-2.246h5.381l5.633 27.1h-6.46l-.389-1.86-.082-.391a228 228 0 0 0-.385-1.796h-8.909c-.272.698-1.46 4.046-1.46 4.046h-7.317zm-29.729-2.276-4.353 27.12h-6.953l4.353-27.12zm-30.292.01c1.511.06 2.74.566 3.164 2.286l2.439 12.432-.034-.091.034.111.725 3.763 6.813-18.491h7.376L41.83 53.565h-7.326l-6.185-23.547c-2.142-1.26-4.586-2.273-7.319-2.976l.09-.556zm64.152 7.323c-.196.584-.467 1.347-.664 1.893l-.091.253-.162.444s-2.197 6.019-2.771 7.576h5.774c-.12-.599-.449-2.195-.778-3.79l-.104-.503-.73-3.526z'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodVisaBlackIcon);
export default ForwardRef;
