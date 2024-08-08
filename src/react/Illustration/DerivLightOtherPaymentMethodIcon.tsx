import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightOtherPaymentMethodIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 58 48'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#a6907be4047a20cd819870a898bafede__a)'>
      <path fill='#84AAAE' d='M8.379 13.452h4.748V9.774H8.379z' />
      <path
        fill='#84AAAE'
        d='m30.815 33.194.093-.194c.56-1.839 1.956-2.613 3.259-3.194a13.3 13.3 0 0 1 5.679-.967c.465 0 .93 0 1.396.097h.373c0-.097 0-.194-.093-.388-.093-1.16.186-2.806 2.048-4.064 1.117-.678 2.327-1.161 3.817-1.452.745-.096 1.396-.193 1.955-.193l.559-.097h.093c1.303 0 2.606.097 3.91.387V3.677C53.997 1.452 52.6 0 50.459 0H3.538C1.49 0 .465.774 0 2.806v28.452c0 .29.186.484.28.968.279 1.258 1.489 2.42 2.885 2.42h27.65zm-1.582-9h7.727v3.193h-7.727zm-16.479 3.193H5.027v-3.193h7.727zm3.538-13.355c0 1.549-1.21 2.71-2.7 2.71H7.82c-1.676 0-2.7-1.065-2.7-2.613V9.581c0-1.742 1.21-2.807 2.7-2.807h5.772c1.676 0 2.7 1.065 2.7 2.71zm8.472 13.162h-7.727V24h7.727z'
      />
      <path
        fill='#E0F0F0'
        d='M32.212 33.387c.372-1.258 1.396-1.839 2.514-2.323 1.675-.677 3.351-.967 5.12-.87.652 0 1.303.096 1.955.096v7.645c-.652 0-1.21.097-1.862.097-1.769 0-3.538-.193-5.213-.87-.373-.194-.652-.291-1.024-.485-.652-.387-1.21-.967-1.49-1.742zm0 7.935c0-.097.093-.193.186-.387.372.58.745 1.065 1.303 1.355 1.024.677 2.142.968 3.259 1.161 1.582.29 3.072.29 4.655.097h.093c0 .677-.093 1.452.28 2.129-.466 0-.932.097-1.397.097-1.955.096-3.91-.097-5.772-.774-.373-.097-.652-.29-1.025-.484-.837-.484-1.49-.968-1.768-1.936.186-.387.186-.87.186-1.258m0-3.967c0-.097.093-.29.186-.387.931 1.451 2.42 2.032 4.003 2.42a15.2 15.2 0 0 0 5.12.29h.28v2.225c-.186 0-.372.097-.652.097-2.14.194-4.282 0-6.33-.774-.652-.29-1.21-.58-1.676-1.065-.373-.387-.652-.774-.838-1.355-.093-.58-.093-.967-.093-1.451m17.875-13.162c2.234 0 4.096.29 5.772 1.065.558.29 1.117.58 1.582 1.161q.56.58.559 1.452v.968c-.093.58-.465.967-.838 1.354-.838.775-1.955 1.162-2.979 1.452-1.583.387-3.165.484-4.841.387-1.49-.097-2.886-.387-4.19-1.064-.558-.29-1.117-.678-1.49-1.162-.371-.387-.465-.87-.558-1.451-.093-1.258.466-2.033 1.397-2.71 1.024-.677 2.141-1.064 3.351-1.258.838-.097 1.676-.097 2.235-.194m-6.89 10.742c.652 1.065 1.676 1.645 2.7 2.032 1.862.678 3.817.871 5.865.678a12.9 12.9 0 0 0 3.91-.871q1.117-.435 1.956-1.452c.093-.097.186-.29.279-.387 0 .097.093.097.093.097.186 1.161.186 2.129-.652 2.903-.651.58-1.49.968-2.327 1.258-1.769.58-3.538.774-5.307.678-1.396-.097-2.7-.29-4.003-.871-.745-.29-1.396-.678-1.955-1.258-.465-.484-.652-.968-.652-1.646-.093-.387-.186-.775.093-1.161m0 8.13c.838 1.451 2.328 1.935 3.724 2.322 1.583.484 3.259.484 4.935.387 1.396-.097 2.792-.387 4.096-1.064.745-.388 1.396-.871 1.769-1.645.093.29.093.483.093.58v1.065c0 .483-.28.87-.559 1.16-.558.678-1.303 1.065-2.141 1.356-1.676.677-3.445.87-5.307.774-1.396 0-2.793-.29-4.189-.774-.745-.29-1.396-.678-2.048-1.162-.745-.774-.745-2.128-.373-2.999'
      />
      <path
        fill='#E0F0F0'
        d='M57.814 30.968q0 .144 0 0c.28.968.28 2.129-.466 2.903a6.6 6.6 0 0 1-2.513 1.452c-1.862.58-3.817.774-5.772.58-1.304-.096-2.607-.387-3.817-.968-.466-.29-1.025-.58-1.397-.87-.558-.484-.838-1.065-.838-1.84 0-.386 0-.773.186-1.16.931 1.548 2.421 2.032 4.004 2.419 1.675.387 3.258.484 4.934.29 1.303-.193 2.7-.484 3.91-1.064.652-.484 1.303-.968 1.769-1.742m0 8.129c0 .096.093.096.093.193.186 1.258.186 2.13-.838 3-.838.678-1.769 1.065-2.793 1.355-1.676.484-3.351.58-5.12.387-1.397-.097-2.7-.387-3.91-.968-.559-.29-1.118-.58-1.583-1.064-.466-.484-.652-.968-.652-1.645 0-.387 0-.774.186-1.258.093.096.187.29.28.387.558.677 1.21 1.064 1.955 1.451a11.2 11.2 0 0 0 3.537.871c1.956.194 3.817.097 5.68-.58a11 11 0 0 0 1.582-.678 3.33 3.33 0 0 0 1.583-1.451'
      />
    </g>
    <defs>
      <clipPath id='a6907be4047a20cd819870a898bafede__a'>
        <path fill='#fff' d='M0 0h58v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightOtherPaymentMethodIcon);
export default ForwardRef;
