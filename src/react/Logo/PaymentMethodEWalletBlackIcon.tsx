import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodEWalletBlackIcon = (
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
      <path d='M39.907 20v3.031a12.244 12.244 0 0 1 11.607 11.6h3.024A15.275 15.275 0 0 0 39.909 20' />
      <path d='M39.907 25.894v3.012a5.73 5.73 0 0 1 5.725 5.725h3.013a8.75 8.75 0 0 0-8.738-8.737M14.726 40.95a5 5 0 0 1 3.463-1.187 4.62 4.62 0 0 1 3.362 1.187 4.45 4.45 0 0 1 1.288 3.169h-9.7a5 5 0 0 1 1.587-3.169' />
      <path
        fillRule='evenodd'
        d='M31.064 49.688v-8.37a2.756 2.756 0 0 1 2.75-2.75h9.475v-2.737a4.825 4.825 0 0 0-4.82-4.825H9.427a1 1 0 1 1 0-1.994h23.181l1.25-3.625H8.732a4.2 4.2 0 0 0-4.193 4.2v25.626A4.82 4.82 0 0 0 9.357 60h29.1a4.82 4.82 0 0 0 4.832-4.819v-2.743h-9.475a2.756 2.756 0 0 1-2.75-2.75m-5.457-3.394h-12.5c.047.649.21 1.284.482 1.875.261.585.623 1.12 1.068 1.581.444.453.97.818 1.55 1.075a4.8 4.8 0 0 0 1.95.394 6.2 6.2 0 0 0 2.838-.625 6.3 6.3 0 0 0 2.075-1.75l1.95 1.518a7.9 7.9 0 0 1-3.038 2.5 9.7 9.7 0 0 1-3.825.707 7.9 7.9 0 0 1-3.268-.625 7.3 7.3 0 0 1-2.425-1.694 7.6 7.6 0 0 1-1.55-2.575 9.1 9.1 0 0 1-.544-3.162 8.9 8.9 0 0 1 .594-3.282 7.4 7.4 0 0 1 4.156-4.244 8.3 8.3 0 0 1 3.169-.6 7.8 7.8 0 0 1 2.968.55c.882.35 1.676.89 2.325 1.582a7.1 7.1 0 0 1 1.5 2.537c.366 1.1.544 2.254.525 3.413z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M33.814 39.775H45.65V51.25H33.813a1.543 1.543 0 0 1-1.543-1.562v-8.37a1.55 1.55 0 0 1 1.543-1.543m1.669 6.874c.224.149.487.227.756.226a1.35 1.35 0 0 0 1.35-1.35 1.356 1.356 0 1 0-2.106 1.124'
        clipRule='evenodd'
      />
      <path d='M102.931 45.809q-1.207 0-1.779-.59-.556-.592-.556-1.708V34h2.351v9.973h1.049v1.836zM62.539 34.67V45.81h7.546v-2.155h-5.131v-2.41h4.4v-2.138h-4.4v-2.282h5.131V34.67zM71.808 39.793v2.297h4.719v-2.297zM77.614 37.43h2.272l.81 3.384.572 2.553h.064l.667-2.553.953-3.383h2.145l.97 3.383.683 2.553h.063l.572-2.553.81-3.383h2.177l-2.304 8.378h-2.462l-1.017-3.543-.588-2.17h-.048l-.572 2.17-1.017 3.543H79.95z' />
      <path
        fillRule='evenodd'
        d='M96.65 45.41q.429.399 1.065.399h1.302v-1.836h-.778v-3.67q0-1.5-.89-2.282t-2.669-.782q-1.32 0-2.097.431a3.6 3.6 0 0 0-1.271 1.165l1.398 1.245q.27-.383.683-.686t1.112-.304q.747 0 1.065.367.318.352.318.958v.526h-1.32q-1.651 0-2.62.655-.954.638-.954 1.963 0 1.101.667 1.77.668.671 1.923.671.953 0 1.605-.415.65-.43.842-1.245h.095q.111.67.524 1.07M95.46 44.1q-.414.255-1.001.255-.525 0-.81-.207-.287-.224-.287-.686v-.24q0-.94 1.383-.941h1.144v.99q0 .573-.43.83'
        clipRule='evenodd'
      />
      <path d='M105.838 45.218q.572.59 1.779.59h1.065v-1.835h-1.049V34h-2.351v9.51q0 1.118.556 1.708' />
      <path
        fillRule='evenodd'
        d='M113.571 46q-.953 0-1.7-.303a3.7 3.7 0 0 1-1.271-.878 3.9 3.9 0 0 1-.779-1.388 6.1 6.1 0 0 1-.254-1.82q0-.989.254-1.786.255-.814.747-1.389a3.34 3.34 0 0 1 1.239-.877q.732-.32 1.669-.32 1.032 0 1.763.351.746.351 1.208.942.476.59.683 1.372a5.8 5.8 0 0 1 .222 1.612v.702h-5.354v.128q0 .83.445 1.324.444.48 1.398.479.73 0 1.192-.287.46-.303.858-.718l1.175 1.468q-.556.654-1.461 1.021-.89.367-2.034.367m-.048-7.021q-.714 0-1.128.478-.397.463-.397 1.245v.128h2.923v-.144q0-.765-.349-1.229-.334-.478-1.049-.478'
        clipRule='evenodd'
      />
      <path d='M120.077 45.186q.636.623 1.859.623h1.399v-1.836h-1.526v-4.707h1.653v-1.835h-1.653v-2.266h-2.113v1.372q0 .431-.175.67-.174.224-.651.224h-.588v1.835h1.176v4.101q0 1.197.619 1.82' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodEWalletBlackIcon);
export default ForwardRef;
